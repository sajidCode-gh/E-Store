import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";

import "./category.styles.scss";
import { selectCategories } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Category = () => {
    const { category } = useParams();

    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [categories, category]);

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
