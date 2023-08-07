import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'

import './Cart-item.style.scss'

const CartIcon = () => {
return(
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
}

export default CartIcon