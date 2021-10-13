import { render, screen } from "@testing-library/react";
import App from "../../App";

test("should render test in sample component", () => {
  render(<App />);
  const text = screen.getByText("Hello Ahmad");
  expect(text).toBeInTheDocument();
});
