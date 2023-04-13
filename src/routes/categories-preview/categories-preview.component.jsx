import { Fragment, useContext } from "react";
import { categoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/categroy-preview.component";

function CategoriesPreview() {
    const { categories } = useContext(categoriesContext);

    return (
        <div className="categories-preview-container">
            {Object.keys(categories).map((key) => {
                const products = categories[key];
                return (
                    <CategoryPreview
                        key={key}
                        title={key}
                        products={products}
                    />
                );
            })}
        </div>
    );
}

export default CategoriesPreview;
