# React + Vite

# Mobile Product Comparison App
- Display list of 6 mobile products (hardcoded data).
- Each product displayed in a card with details and image.
- Add product to comparison using a checkbox toggle.
- Minimum 2 and maximum 3 products can be compared at a time.
- Prevent adding more than 3 products for comparison.
- Ability to remove selected products from comparison table.
- Simple and clean UI design.
- Fully responsive design.

## Technologies Used
- React.js (functional components & hooks)
- JavaScript (ES6)
- CSS3 (custom styling)
- Vite (development server)
- No Redux, No Context API — simple state-based logic

## Folder Structure
/src
/components
- Products.jsx --> Main UI and comparison logic/data
- Data.js --> Product data (static)
- App.css --> Styling
- main.jsx --> React entry point
- App.jsx --> Renders Products component

## Comparison Logic Explanation
- The find() method is used to check whether product already exists in the compare list or not.
- Maximum of 3 products can be added for comparison.
- Comparison table renders only when at least 2 products are selected.

# How to Run Locally
1. Clone the repository:
2. Run Command npm install
3. Run Command npm run dev
