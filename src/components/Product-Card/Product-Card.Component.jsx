import "./Product-Card.scss";

import Button from "../Button/Button-component";

const ProductCard = ({ Product }) => {
  const { name, price, imageUrl } = Product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttontype='inverted'>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
