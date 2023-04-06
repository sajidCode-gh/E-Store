import { createContext, useState } from "react";
import JSON_DATA from "../shop-data.json";

export const productsContext = createContext({
    data: [],
});

export const ProductsProvider = ({ children }) => {
    const [data, setData] = useState(JSON_DATA);

    const value = { data, setData };

    return (
        <productsContext.Provider value={value}>
            {children}
        </productsContext.Provider>
    );
};
