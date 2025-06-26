import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

test("Profile renders heading and paragraph", () => {
  render(<Profile />);
  const headingElement = screen.getByRole("heading", { level: 1 });
  expect(headingElement).toBeInTheDocument();
});
