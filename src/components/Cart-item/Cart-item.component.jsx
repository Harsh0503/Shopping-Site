import { useContext } from 'react'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'

import { CartContext } from '../../Context/Cart.context'

import './Cart-item.style.scss'

const CartIcon = () => {
  
    const {isCartopen , setIsCartOpen} = useContext(CartContext)
   
    const toggleIsCartopen = () => setIsCartOpen(!isCartopen)

    return(
    <div className='cart-icon-container' onClick = {toggleIsCartopen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
}

export default CartIcon