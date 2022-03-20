import { AxiosResponse } from "axios";
import { apiInstance } from "./serviceApi";

async function get<T = any>(
  endpoint: string,
  params: any
): Promise<AxiosResponse<T>> {
  const result = await apiInstance.get(endpoint, params);
  return result?.data;
}

export { get };
