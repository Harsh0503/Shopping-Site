import {useContext} from "react"

import {CartContext} from "../../Context/Cart.context"

import Buttons from "../Button/Button-component";

import CartItem from "../Cart-Items/Cart-Items.component";

import "./Cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
      {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))} 
      </div>
      <Buttons>checkout</Buttons>
    </div>
  );
};

export default CartDropdown;
