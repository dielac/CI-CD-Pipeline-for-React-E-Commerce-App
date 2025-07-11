import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/types";
import { CartProvider } from "../context/CartContext";
import { ProductProvider } from "../context/ProductContext";

const fakeProduct: Product = {
  id: 1,
  title: "Test Shoe",
  price: 50,
  category: "footwear",
  description: "A comfy sneaker.",
  image: "https://example.com/shoe.jpg",
  rating: { rate: 4.2, count: 10 },
};

jest.mock("@smastrom/react-rating", () => ({
  Rating: () => <div data-testid="mock-rating" />,
}));
test("renders product title and price", () => {
  render(
    <ProductProvider>
      <CartProvider>
        <ProductCard product={fakeProduct} />
      </CartProvider>
    </ProductProvider>
  );

  expect(screen.getByText(/Test Shoe/i)).toBeInTheDocument();
  expect(screen.getByText(/\$50/i)).toBeInTheDocument();
});
