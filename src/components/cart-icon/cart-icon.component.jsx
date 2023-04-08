import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);

    return (
        <div
            className="cart-icon-container"
            onClick={() => setIsCartOpen(!isCartOpen)}
        >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
