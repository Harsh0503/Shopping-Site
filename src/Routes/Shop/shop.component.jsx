import { useContext } from "react"

import { Productscontext } from "../../Context/Product.context"

import ProductCard from '../../components/Product-Card/Product-Card.Component'

import './shop.style.scss'

const Shop = () => {
    const { products } = useContext(Productscontext);
    return (
        <div className="product-container">
            {
                products.map((Product) => (
                    <ProductCard key={Product.id} Product={Product} />
                ))}
        </div>
    )
}

export default Shop