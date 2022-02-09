import { useState } from "react";
import React from "react";
const Ecommerce = () => {
    let [product, setProduct] = useState([{ name: "", description: "", price: "", color: "", expiry: "" }])
    let addProduct = (event) => {
        event.preventDefault()
        let productObj = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            color: event.target.color.value,
            expiry: event.target.expiry.value
        }
        let newProduct = [...product, productObj]
        setProduct(newProduct)
    }
    return (
        <div className="ecommerceDiv">
            <form onSubmit={addProduct}>
                <h1>Welcome to Ecommerce-Component</h1>
                < input type="text" name="name" placeholder="Product Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="number" name="price" placeholder="Price" />
                <br />
                Color :<input type="color" name="color" className="colorClass" />
                <br />
                Expiry : <input type="date" name="expiry" />
                <br />
                <button className="bigButton">Add</button>
                <br />
            </form>
            {product.map((val, index) => {
                if (index == 0) {
                    return false
                }
                else {
                    return (
                        <div>
                            <h1>Product : {index} </h1>
                            <h3>
                                <table>
                                    <tr>
                                        <td>
                                            Name
                                        </td>
                                        <td>
                                            {val.name}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Description
                                        </td>
                                        <td>
                                            {val.description}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            {val.price}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Color
                                        </td>
                                        <td>
                                            {val.color}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            Expiry
                                        </td>
                                        <td>
                                            {val.expiry}
                                        </td>
                                    </tr>

                                </table>
                            </h3>

                        </div>
                    )
                }

            })}
        </div>
    )
}
export default Ecommerce;