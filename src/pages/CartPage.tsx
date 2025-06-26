import { useCart } from "../context/CartContext";
import type { Product } from "../types/types";



const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul>
          {cartItems.map((item: Product, index: number) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {/* Just show the product title and price */}
              {item.title} — ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
