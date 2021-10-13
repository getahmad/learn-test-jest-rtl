import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("should render component action", () => {
  render(<App />);
  // screen.debug();
  const btn = screen.getAllByRole("button")[0];
  fireEvent.click(btn);
  // screen.debug();
});
