import { render, screen } from "@testing-library/react";
import { Card } from "../Index";

const Component = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        fontSize: 60,
        letterSpacing: 0.5,
      }}
    >
      70
    </div>
  );
};

describe("Card Component", () => {
  test("should render card properly", () => {
    render(
      <Card title="Lead Score">
        <Component />
      </Card>
    );

    expect(screen.getByText(/Lead Score/i)).toBeInTheDocument();

    expect(screen.getByText(/70/i)).toBeInTheDocument();
  });
});
