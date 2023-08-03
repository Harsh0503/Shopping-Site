import { useContext } from "react"

import { Productscontext } from "../../Context/Product.context"

const Shop = () => {
    const { products } = useContext(Productscontext);
    return (
        <div>
            {
                products.map(({ id, name }) => (
                    <div key={id}>
                        <h1>{name} </h1>
                    </div>
                ))}
        </div>
    )
}

export default Shop