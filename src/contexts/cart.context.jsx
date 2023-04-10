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

const RemoveItems = (cartItems, productToRemove) => {
    const isProductExist = cartItems.find(
        (item) => item.id == productToRemove.id
    );

    if (isProductExist.quantity == 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }

    return cartItems.map((item) => {
        return item.id == productToRemove.id
            ? { ...cartItems, quantity: item.quantity - 1 }
            : {};
    });
};

const clearItems = (cartItems, productToClear) => {
    const isProductExist = cartItems.find(
        (item) => item.id == productToClear.id
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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemsToCart = (productToAdd) => {
        return setCartItems(addItems(cartItems, productToAdd));
    };

    const removeItemsToCart = (productToRemove) => {
        return setCartItems(RemoveItems(cartItems, productToRemove));
    };

    const handleClearItem = (productToClear) => {
        return setCartItems(clearItems(cartItems, productToClear));
    };

    const value = {
        handleClearItem,
        isCartOpen,
        setIsCartOpen,
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
