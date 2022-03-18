import { AxiosResponse } from "axios";
import { apiInstance } from "./serviceApi";

async function get(endpoint: string, params: any): Promise<AxiosResponse> {
  const result = await await apiInstance.get(endpoint, params);
  return result.data;
}

export { get };
