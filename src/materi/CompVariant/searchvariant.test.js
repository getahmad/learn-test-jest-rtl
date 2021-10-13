import { render, screen } from "@testing-library/react";
import App from "../../App";
import { data } from "./CompVariant";

it("melakukan testing untuk queryBy dan findBy", async () => {
  render(<App />);
  expect(screen.queryByText(/haiii/)).toBeNull();
  //   screen.debug();
  expect(await screen.findByText(/haiii/)).toBeInTheDocument();
  //   screen.debug();
});

test("should render data hari", () => {
  render(<App />);
  expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
});
