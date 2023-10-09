import { useContext } from "react";

import "./Product-Card.scss";

import Button from "../Button/Button-component";
import { CartContext } from "../../Context/Cart.context";

const ProductCard = ({ Product }) => {
  const { name, price, imageUrl } = Product;
  const {addItemToCart} = useContext(CartContext)
  const addProducttoCart = () => addItemToCart(Product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttontype='inverted' onClick={addProducttoCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
