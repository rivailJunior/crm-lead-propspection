import { render, screen } from "@testing-library/react";
import { everyThingWrapper } from "../../helper/rtl";
import LeadScore from "./lead-score";

import { usersFixtures } from "../../mocks/users.fixtures";

import MockAdapter from "axios-mock-adapter";
import { apiInstance } from "../../service/serviceApi";

const axiosMock = new MockAdapter(apiInstance);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    userid: "1",
  }),
  useRouteMatch: () => ({ url: "/lead/" }),
}));

jest.mock("../../utils/random-score.ts", () => {
  return {
    generateFakeScore: () => 61,
  };
});

describe("Lead Score Page with data", () => {
  test("should render lead score page properly", async () => {
    axiosMock.onGet("/users/1").reply(200, usersFixtures[0]);

    render(<LeadScore />, { wrapper: everyThingWrapper });

    expect(
      screen.getByText(/Checking user information.../i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Cheking judicial information.../i)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Calculating score.../i)
    ).toBeInTheDocument();
  });

  test("should render page and prospect lead correctly", async () => {
    axiosMock.onGet("/users/1").reply(200, usersFixtures[0]);

    render(<LeadScore />, { wrapper: everyThingWrapper });

    expect(
      screen.getByText(/Checking user information.../i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Cheking judicial information.../i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Calculating score.../i)).toBeInTheDocument();

    expect(
      await screen.findByText(
        `${usersFixtures[0].name}, ${usersFixtures[0].username}`
      )
    ).toBeInTheDocument();

    expect(await screen.findByText(usersFixtures[0].email)).toBeInTheDocument();

    expect(
      await screen.findByText(usersFixtures[0].company.name)
    ).toBeInTheDocument();

    expect(await screen.findByText(usersFixtures[0].phone)).toBeInTheDocument();

    expect(
      await screen.findByText(
        `${usersFixtures[0].address.street}, ${usersFixtures[0].address.suite}, ${usersFixtures[0].address.zipcode}`
      )
    ).toBeInTheDocument();

    expect(await screen.findByText(/No user pendency/i)).toBeInTheDocument();
    expect(await screen.findByText(/Score/i)).toBeInTheDocument();
    expect(
      await (
        await screen.findByRole("score")
      ).TEXT_NODE
    ).toBeGreaterThanOrEqual(0);

    expect(
      await screen.findByText(/lead is now prospected!!!/i)
    ).toBeInTheDocument();
  });
});
