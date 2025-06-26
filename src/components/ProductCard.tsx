
import type { Product } from "../types/types";
import { useCart } from "../context/CartContext";

import "./ProductCard.css";

import { Rating } from "@smastrom/react-rating"


const ProductCard = ({ product }: { product: Product }) => {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card" style={{ border: "1px solid #ccc", padding: "10px" }}>
      {/* Product image */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
      />

      {/* Product title */}
      <h2>{product.title}</h2>

      {/* Product price */}
      <p style={{ fontWeight: "bold" }}>${product.price}</p>

     
<Rating className="star-icon" value={product.rating.rate} readOnly />

      {/* “Add to Cart” Button */}
      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "8px",
          padding: "8px 12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
