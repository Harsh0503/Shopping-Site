import Buttons from "../Button/Button-component";

import "./Cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Buttons>checkout</Buttons>
    </div>
  );
};

export default CartDropdown;
