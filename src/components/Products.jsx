import React, { useState, useEffect, useRef } from 'react';
import mobileData from "../data/Data";

const Products = () => {
  const [compareList, setCompareList] = useState([]);
  const [search, setSearch] = useState("");
  const compareSectionRef = useRef(null); 

  const handleCompareChange = (item) => {
    const isSelected = compareList.find((product) => product.id === item.id);

    if (isSelected) {
      setCompareList(compareList.filter((product) => product.id !== item.id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, item]);
      } else {
        alert("You can compare only 3 products.");
      }
    }
  };

  const handleRemove = (id) => {
    setCompareList(compareList.filter((product) => product.id !== id));
  };

  const isChecked = (id) => {
    return compareList.some((product) => product.id === id);
  };

  const getData = (e) => {
    setSearch(e.target.value);
  };

  const filterData = mobileData.filter((curProduct) => {
    return (
      curProduct.name.toLowerCase().includes(search.toLowerCase()) ||
      curProduct.brand.toLowerCase().includes(search.toLowerCase())
    );
  });


  useEffect(() => {
    if (compareList.length >= 2 && compareSectionRef.current) {
      compareSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [compareList]);

  return (
    <>
      <section className='product--wrapper'>
        <div className='container'>
          <input
            className='serach--input'
            placeholder='Type mobile name or brand to search...'
            onChange={getData}
          />
          <div className='product--main'>
            {filterData.map((item) => (
              <div key={item.id} className='product--card'>
                <div className='image--wrap'>
                  <img src={item.url} alt={item.name} />
                </div>
                <div className='brand--details'>
                  <div className='product--name'>{item.name}</div>
                  <div className='brand--name'><b>Brand: </b>{item.brand}</div>
                  <div className='brand--name'><b>Price: </b>{item.price}</div>
                  <div className='brand--name'><b>About this item</b>
                    <ul>
                      {item.features.map((feature, idx) => (
                        <li key={idx}>- {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <label className="compare-toggle">
                    <input
                      type="checkbox"
                      checked={isChecked(item.id)}
                      onChange={() => handleCompareChange(item)}
                    />
                    <span className="checkbox"></span>
                    <span className="text">Add to Compare</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={compareSectionRef}>
        <div className='container'>
          <div className='selected--product'>
            {compareList.length >= 2 && (
              <table>
                <thead>
                  <tr>
                    <th>Compare Products</th>
                    {compareList.map((product) => (
                      <th key={product.id}>
                        {product.name}{" "}
                        <button onClick={() => handleRemove(product.id)}>Remove</button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brand Name</td>
                    {compareList.map((product) => (
                      <td key={product.id}>{product.brand}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Display</td>
                    {compareList.map((product) => (
                      <td key={product.id}>
                        {product.features.find(f => f.toLowerCase().includes("display")) || "-"}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Battery</td>
                    {compareList.map((product) => (
                      <td key={product.id}>
                        {product.features.find(f => f.toLowerCase().includes("battery")) || "-"}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Camera</td>
                    {compareList.map((product) => (
                      <td key={product.id}>
                        {product.features.find(f => f.toLowerCase().includes("camera")) || "-"}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Price</td>
                    {compareList.map((product) => (
                      <td key={product.id}>${product.price}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
