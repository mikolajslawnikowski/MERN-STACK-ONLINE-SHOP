import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

const WomenCategoryButtons = () => {
  const { dispatch } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    fetch("/api/products/women/" + category)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data });
        navigate("/women/" + category);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("tshirts")}>T-shirts</button>
      <button onClick={() => handleButtonClick("hoodies")}>Hoodies</button>
      <button onClick={() => handleButtonClick("jackets")}>Jackets</button>
      <button onClick={() => handleButtonClick("pants")}>Pants</button>
      <button onClick={() => handleButtonClick("shoes")}>Shoes</button>
    </div>
  );
};

export default WomenCategoryButtons;
