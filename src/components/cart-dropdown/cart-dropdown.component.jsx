import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { cartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
    const { cartItems } = useContext(cartContext);

    const navigate = useNavigate();

    const navigateCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="cart-dropdown-container">
            {cartItems.map((product) => (
                <CartItem key={product.id} cartItem={product} />
            ))}

            <Button onClick={navigateCheckout}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
