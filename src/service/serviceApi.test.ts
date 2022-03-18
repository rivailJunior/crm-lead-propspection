import { todosFixtures } from "../mocks/todos.fixtures";
import { get } from "./request";
import { apiInstance } from "./serviceApi";

describe("Service Api", () => {
  it("should call axios.get properly", async () => {
    jest.spyOn(apiInstance, "get").mockResolvedValueOnce(todosFixtures);
    await get("/todos", null);
    expect(apiInstance.get).toHaveBeenCalled();
    expect(apiInstance.get).toBeCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith("/todos", null);
  });
});
