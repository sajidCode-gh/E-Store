import { createContext, useEffect, useState } from "react";
import JSON_DATA from "../shop-data.js";
import { getCategoriesData } from "../utils/firebase/firebase.utils.js";

export const categoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesData();
            setCategories(categoryMap);
        };

        getCategories();
    }, []);

    const value = { categories, setCategories };

    return (
        <categoriesContext.Provider value={value}>
            {children}
        </categoriesContext.Provider>
    );
};
