import { get } from "./request";
import mockAdapter from "axios-mock-adapter";
import { todosFixtures } from "../mocks/todos.fixtures";
import { apiInstance } from "./serviceApi";
const axiosMock = new mockAdapter(apiInstance);

describe("Request Service", () => {
  it("should return get response properly", async () => {
    axiosMock.onGet("/todos").reply(200, todosFixtures);
    const result = await get("/todos", null);
    expect(result).toEqual(todosFixtures);
  });
});
