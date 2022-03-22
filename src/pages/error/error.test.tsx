import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../helper/rtl";
import Error from "./Index";

describe("Error page", () => {
  test("should render page properly", () => {
    renderWithRouter(<Error />);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/back home/i)).toBeInTheDocument();
  });
});
