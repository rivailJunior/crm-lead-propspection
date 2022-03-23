import { fireEvent, render, screen } from "@testing-library/react";
import { LeadList } from ".";
import { renderWithRouter, everyThingWrapper } from "../../helper/rtl";
import { usersFixtures } from "../../mocks/users.fixtures";

import MockAdapter from "axios-mock-adapter";
import { apiInstance } from "../../service/serviceApi";

const axiosMock = new MockAdapter(apiInstance);

describe("Lead list page", () => {
  test("should render lead list page properly", () => {
    renderWithRouter(<LeadList />);
    expect(screen.getByText(/Lead User List/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText("/ leads")).toBeInTheDocument();
  });

  test("should render lead list with data properly", async () => {
    axiosMock.onGet("/users").reply(200, usersFixtures);
    render(<LeadList />, { wrapper: everyThingWrapper });
    expect(await screen.findByText(usersFixtures[0].name)).toBeInTheDocument();
    expect(await screen.findByText(usersFixtures[1].name)).toBeInTheDocument();
    expect(await screen.findByText(usersFixtures[2].name)).toBeInTheDocument();
  });

  test.each([
    ["/lead/1", usersFixtures[0].name],
    ["/lead/2", usersFixtures[1].name],
    ["/lead/3", usersFixtures[2].name],
  ])(
    "should redirect user to page: %s when click on lead: %s",
    async (path, lead) => {
      axiosMock.onGet("/users").reply(200, usersFixtures);
      render(<LeadList />, { wrapper: everyThingWrapper });
      expect(await screen.findByText(lead)).toBeInTheDocument();
      fireEvent.click(await screen.findByText(lead));
      expect(window.location.pathname).toBe(path);
    }
  );
});
