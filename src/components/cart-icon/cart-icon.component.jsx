import { useDispatch, useSelector } from "react-redux";
import {
    CartIconContainer,
    ItemCount,
    ShopingSVG,
} from "./cart-icon.styles.js";
import {
    selectCartCount,
    selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.actions.js";

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);

    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const handleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={handleCartOpen}>
            <ShopingSVG></ShopingSVG>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
