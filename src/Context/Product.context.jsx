import { createContext, useState } from "react";

import PRODUCTS from '../Shop-data.json'

export const Productscontext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <Productscontext.Provider value={value}>{children}</Productscontext.Provider>
    )
}