import { useDispatch, useSelector } from "react-redux";
import Button from "./../button/button.component";
import "./product-card.styles.scss";
import { addItemToCart } from "../../store/cart/cart.reducer";

export function ProductCard({ product }) {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();
    // const { addItemsToCart } = useContext(cartContext);

    const toggleProduct = () => dispatch(addItemToCart(product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={toggleProduct}>
                Add to card
            </Button>
        </div>
    );
}
