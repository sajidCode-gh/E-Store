import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(categoriesContext);

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
