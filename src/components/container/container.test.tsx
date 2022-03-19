import { render, screen } from "@testing-library/react";
import Container from "./Index";

const Component = () => <div className="box">box</div>;

describe("Container", () => {
  test("should render container properly", () => {
    render(<Container />);
    expect(screen.getByRole("container", { name: "" })).toBeInTheDocument();
  });

  test("should render container with itens inside properly", () => {
    const subItems = Array(10).fill(null);
    render(
      <Container>
        {subItems.map((_, id) => {
          return <Component key={id} />;
        })}
      </Container>
    );
    expect(screen.getAllByText("box")).toHaveLength(10);
  });
});
