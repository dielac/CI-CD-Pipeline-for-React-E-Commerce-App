import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

jest.mock("@tanstack/react-query", () => ({
  useQuery: ({ queryKey }: any) => {
    if (queryKey[0] === "products") {
      return {
        data: [
          {
            id: 1,
            title: "Test Product",
            price: 50,
            category: "shoes",
            image: "https://via.placeholder.com/150", 
          },
        ],
        isLoading: false,
        isError: false,
      };
    } else if (queryKey[0] === "categories") {
      return {
        data: ["shoes", "hats"],
        isLoading: false,
        isError: false,
      };
    }
    return { data: null, isLoading: false, isError: false };
  },
}));

describe("Home Page", () => {
  test("renders mocked product", () => {
    render(
      <ProductProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </ProductProvider>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$50/i)).toBeInTheDocument();
  });
});
