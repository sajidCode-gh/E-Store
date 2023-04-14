import {
    CartIconContainer,
    ItemCount,
    ShopingSVG,
} from "./cart-icon.styles.js";

import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);

    return (
        <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShopingSVG></ShopingSVG>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
