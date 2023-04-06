import { useContext } from "react";
import JSON_DATA from "./../../shop-data.json";
import { productsContext } from "../../contexts/products.context";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

function Shop() {
    const { data } = useContext(productsContext);

    return (
        <div className="shop-container">
            {data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Shop;
