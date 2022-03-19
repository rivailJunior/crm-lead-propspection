import { render, screen } from "@testing-library/react";
import Header from "./Index";

describe("Header Component", () => {
  test("should render header properly", () => {
    render(<Header />);

    expect(screen.getByAltText("Addi")).toBeInTheDocument();
    expect(screen.getByText("Rivail Santos")).toBeInTheDocument();
  });
});
