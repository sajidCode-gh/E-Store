import { createContext, useEffect, useState } from "react";

const addItems = (cartItems, productToAdd) => {
    const isProductExist = cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id
    );

    if (isProductExist) {
        return cartItems.map((cartitem) => {
            return cartitem.id == productToAdd.id
                ? { ...cartitem, quantity: cartitem.quantity + 1 }
                : { ...cartitem };
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemsToCart = (productToAdd) => {
        return setCartItems(addItems(cartItems, productToAdd));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemsToCart,
        cartCount,
    };

    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
};
