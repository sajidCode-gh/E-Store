import CategoryPreview from "../../components/category-preview/categroy-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

function CategoriesPreview() {
    const categories = useSelector((state) => selectCategories(state));

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
