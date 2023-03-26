import CategoryItem from "../category-item/category-component";
import "../directory/directory.styles.scss";

const Directory = ({ categories }) => (
    <div className="categories-container">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </div>
);

export default Directory;