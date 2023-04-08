import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { cartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
    const { cartItems } = useContext(cartContext);

    return (
        <div className="cart-dropdown-container">
            {cartItems.map((product) => (
                <CartItem key={product.id} cartItem={product} />
            ))}

            <Link to="checkout">
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;
