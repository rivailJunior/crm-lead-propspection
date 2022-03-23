import { renderHook } from "@testing-library/react-hooks";
import useUserProspection from "../useProspection";

import MockAdapter from "axios-mock-adapter";
import { apiInstance } from "../../service/serviceApi";
import { usersFixtures } from "../../mocks/users.fixtures";
import { everyThingWrapper } from "../../helper/rtl";

const axiosMock = new MockAdapter(apiInstance);

jest.mock("../../utils/random-score.ts", () => {
  return {
    generateFakeScore: () => 61,
  };
});

describe("useUserProspection", () => {
  jest.useFakeTimers();
  test("should do user prospection pipeline properly", async () => {
    axiosMock.onGet("/users/1").reply(200, usersFixtures[0]);

    const { result, waitForNextUpdate } = renderHook(
      () => useUserProspection("1"),
      { wrapper: everyThingWrapper }
    );
    expect(result.current.score).toEqual(0);
    await waitForNextUpdate();
    jest.runAllTimers();
    expect(result.current.userData).toEqual(usersFixtures[0]);
    await waitForNextUpdate();
    expect(result.current.score).toBe(61);
    expect(result.current.loading).toEqual(false);

    expect(result.current.error).toEqual(false);
  });

  test("should not prospect user if id is not passed", async () => {
    axiosMock.onGet("/users/1").reply(200, usersFixtures[0]);
    jest.resetAllMocks();

    const { result, waitForNextUpdate } = renderHook(
      () => useUserProspection(),
      { wrapper: everyThingWrapper }
    );
    expect(result.current.score).toEqual(0);
    await waitForNextUpdate();
    jest.runAllTimers();
    expect(result.current.userData).toEqual({});
    await waitForNextUpdate();
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);
  });

  test("should return error equal true", async () => {
    axiosMock.onGet("/users/1").reply(500);

    const { result, waitForNextUpdate } = renderHook(
      () => useUserProspection("1"),
      { wrapper: everyThingWrapper }
    );
    expect(result.current.score).toEqual(0);
    await waitForNextUpdate();

    expect(result.current.error).toEqual(true);
  });
});
