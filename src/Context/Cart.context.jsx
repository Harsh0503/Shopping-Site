import { useState , createContext , useEffect} from "react";

const addCartItems = (cartItems ,productToAdd) => {
  
    const existingCartItems = cartItems.find(
        (cartItem) =>cartItem.id === productToAdd.id
    );

    if(existingCartItems){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id 
        ? {...cartItem,quantity:cartItem.quantity + 1}
        :cartItem
        )
    }
   return[...cartItems,{...productToAdd , quantity:1}]
}

export const CartContext = createContext ({
    isCartopen : false ,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart:() =>{},
    cartCount :0
})

export const CartProvider = ({ children }) => {
    const [isCartopen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] =useState(0)

    useEffect(() => {
       const newCartCount = cartItems.reduce((total , cartItem) => total + cartItem.quantity , 0) 
       setCartCount(newCartCount)
    }, [cartItems])

  const addItemToCart = (productToAdd) => 
    setCartItems(addCartItems(cartItems, productToAdd))
 


    const value = {isCartopen,setIsCartOpen , addItemToCart , cartItems , cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}