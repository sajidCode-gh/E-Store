import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems } = useContext(cartContext);

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>
                        quantity:
                        <button onClick={() => +item.quantity}>+</button>
                        {item.quantity}
                        <button onClick={() => -item.quantity}>-</button>
                    </div>
                    <div>Price: {item.price * item.quantity}</div>
                </div>
            ))}
        </div>
    );
};

export default Checkout;
