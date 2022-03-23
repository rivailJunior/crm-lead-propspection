import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../helper/rtl";
import Header from "./Index";

describe("Header Component", () => {
  test("should render header properly", () => {
    renderWithRouter(<Header />);

    expect(screen.getByAltText(/Addi/i)).toBeInTheDocument();
    expect(screen.getByText(/Rivail Santos/i)).toBeInTheDocument();
  });
});
