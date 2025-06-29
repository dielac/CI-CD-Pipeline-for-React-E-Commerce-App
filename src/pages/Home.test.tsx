import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";


jest.mock("@smastrom/react-rating", () => ({
  Rating: () => <div data-testid="mock-rating">★</div>,
}));

const queryClient = new QueryClient();

describe("Home Page", () => {
  it("renders without crashing and shows loading state", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </ProductProvider>
      </QueryClientProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
