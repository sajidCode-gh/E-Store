import { Fragment } from "react";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../categrory/category.component";
import { useEffect } from "react";
import { getCategoriesData } from "../../utils/firebase/firebase.utils";
import { setCategoriesArrays } from "../../store/categories/category.actions";
import { useDispatch } from "react-redux";

function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategories = async () => {
            const categoryArrays = await getCategoriesData();
            dispatch(setCategoriesArrays(categoryArrays));
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
