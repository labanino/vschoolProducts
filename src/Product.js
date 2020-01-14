import React from "react"

function Product(props) {
    return (
        <section>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </section>
    )
}

export default Product