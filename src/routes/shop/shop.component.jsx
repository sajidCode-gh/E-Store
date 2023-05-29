import { Fragment } from "react";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../categrory/category.component";
import { useEffect } from "react";
import { getCategoriesData } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.reducer";

function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategories = async () => {
            const categoryArrays = await getCategoriesData();
            dispatch(setCategories(categoryArrays));
        };

        getCategories();
    }, [dispatch]);

    return (
        <Fragment>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </Fragment>
    );
}

export default Shop;
