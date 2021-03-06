import { render, screen } from "@testing-library/react";
import { List, ListItem, Text } from "../Index";

describe("List Component", () => {
  test("should render List properly", () => {
    render(
      <List>
        <ListItem>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quis quae veritatis minima rerum nostrum veniam, nulla facere nemo,
            voluptatum, alias optio in harum debitis ullam? Fugit asperiores qui
            magnam!
          </Text>
        </ListItem>
      </List>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getByRole("listItem")).toBeInTheDocument();
  });
});
