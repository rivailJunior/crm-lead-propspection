import useUsers from "../useUsers";
import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";
import { apiInstance } from "../../service/serviceApi";
import { usersFixtures } from "../../mocks/users.fixtures";

const axiosDelayMock = new MockAdapter(apiInstance, { delayResponse: 2000 });

const axiosMock = new MockAdapter(apiInstance);

describe("useUsers", () => {
  test("should get all users from api properly", async () => {
    axiosMock.onGet("/users").reply(200, usersFixtures);
    const { result, waitForNextUpdate } = renderHook(() => useUsers());
    await waitForNextUpdate();
    expect(result.current.users).toEqual(usersFixtures);
    expect(result.current.users).toHaveLength(usersFixtures.length);
  });

  test("should return loading state equal true", async () => {
    axiosDelayMock.onGet("/users").reply(200, usersFixtures);
    const { result, waitForNextUpdate } = renderHook(() => useUsers());
    expect(result.current.loading).toBe(false);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(true);
    expect(result.current.users).toEqual(usersFixtures);
    expect(result.current.users).toHaveLength(usersFixtures.length);
  });

  test.each([[400], [500]])(
    "should return error when status code is equal: %s",
    async (statusCode) => {
      axiosMock.onGet("/users").reply(statusCode, null);
      const { result, waitForNextUpdate } = renderHook(() => useUsers());
      expect(result.current.error).toBe(false);

      await waitForNextUpdate();
      expect(result.current.error).toBe(true);
    }
  );
});
