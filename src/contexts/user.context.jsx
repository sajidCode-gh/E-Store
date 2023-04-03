import { createContext, useEffect, useState } from "react";
import {
    onAuthChangedListner,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentValue: null,
    setCurrentValue: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentValue, setCurrentValue] = useState(null);

    const value = { currentValue, setCurrentValue };

    useEffect(() => {
        const unsubscribe = onAuthChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentValue(user);
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
