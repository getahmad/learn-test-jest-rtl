import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("should first text after render", () => {
  test("should render text yang dirender pertama", () => {
    render(<App />);
    const txt = screen.getByText("saya sedang sembunyikan");
    expect(txt).toBeInTheDocument();
  });

  test("should render txt btn pertama di render", () => {
    render(<App />);
    const txtBtn = screen.getByText("muncul");
    expect(txtBtn).toBeInTheDocument();
  });
});

describe("should render after onclik btn", () => {
  test("should render text after onclick", () => {
    render(<App />);
    const btn = screen.getByText("muncul");
    fireEvent.click(btn);
    const txt = screen.getByText("saya sedang muncul");
    expect(txt).toBeInTheDocument();
  });

  test("should render btn text after onclick", () => {
    render(<App />);
    // screen.getByRole("");
    const btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    const btnResult = screen.getByText("sembunyikan");
    expect(btnResult).toBeInTheDocument();
  });
});

// getBy ==> search variants
// Role/Text ==> search type
