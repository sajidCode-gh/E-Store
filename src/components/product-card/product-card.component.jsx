import React, { useContext } from "react";
import Button from "./../button/button.component";
import "./product-card.styles.scss";
import { cartContext } from "../../contexts/cart.context";

export function ProductCard({ product }) {
    const { name, price, imageUrl } = product;

    const { addItemsToCart } = useContext(cartContext);

    const toggleProduct = () => addItemsToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={toggleProduct}>
                Add to card
            </Button>
        </div>
    );
}
