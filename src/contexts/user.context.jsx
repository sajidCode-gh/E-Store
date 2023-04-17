import { createContext, useEffect, useReducer } from "react";
import {
    onAuthChangedListner,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentValue: null,
    setCurrentValue: () => null,
});

const SET_ACTION_USER = {
    currentUser: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ACTION_USER.currentUser:
            return {
                ...state,
                currentValue: payload,
            };
        default:
            throw new Error(`wrong user handled : ${type}`);
    }
};

const initialState = {
    currentValue: null,
};

export const UserProvider = ({ children }) => {
    // const [currentValue, setCurrentValue] = useState(null);

    const [{ currentValue }, dispatch] = useReducer(userReducer, initialState);

    const setCurrentValue = (user) => {
        dispatch(createAction("SET_CURRENT_USER", user));
    };

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
