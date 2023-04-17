import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addItems = (cartItems, productToAdd) => {
    const isProductExist = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (isProductExist) {
        return cartItems.map((cartitem) => {
            return cartitem.id === productToAdd.id
                ? { ...cartitem, quantity: cartitem.quantity + 1 }
                : { ...cartitem };
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const RemoveItems = (cartItems, productToRemove) => {
    const isProductExist = cartItems.find(
        (item) => item.id === productToRemove.id
    );

    if (isProductExist.quantity === 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }

    return cartItems.map((item) => {
        return item.id === productToRemove.id
            ? { ...cartItems, quantity: item.quantity - 1 }
            : {};
    });
};

const clearItems = (cartItems, productToClear) => {
    const isProductExist = cartItems.find(
        (item) => item.id === productToClear.id
    );

    if (isProductExist) {
        return cartItems.filter((item) => item.id !== productToClear.id);
    }
};

export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    handleClearItem: () => {},
    cartCount: 0,
    cartTotal: 0,
});

const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "toggle_cart":
            return {
                ...state,
                isCartOpen: payload,
            };
        case "add_to_cart":
            return {
                ...state,
                ...payload,
            };

        default:
            throw new Error("unexpected Error");
    }
};

export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
        useReducer(cartReducer, initialState);

    const addToCartReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        const newCartCount = newCartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        dispatch(
            createAction("add_to_cart", {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            })
        );
    };

    const setIsCartOpen = (bool) => {
        dispatch({ type: "toggle_cart", payload: bool });
    };

    const addItemsToCart = (productToAdd) => {
        const newCartItems = addItems(cartItems, productToAdd);
        addToCartReducer(newCartItems);
    };

    const removeItemsToCart = (productToRemove) => {
        const newCartItems = RemoveItems(cartItems, productToRemove);
        addToCartReducer(newCartItems);
    };

    const handleClearItem = (productToClear) => {
        const newCartItems = clearItems(cartItems, productToClear);
        addToCartReducer(newCartItems);
    };

    const value = {
        handleClearItem,
        setIsCartOpen,
        isCartOpen,
        cartItems,
        addItemsToCart,
        cartCount,
        removeItemsToCart,
        cartTotal,
    };

    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
};
