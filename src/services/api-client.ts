import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "cb5288b8957046c3aae933e3cf39bf84",
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <T>(config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getGameDetail = <T>(slug: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };

  getGameTrailers = <T>(id: number) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + "/" + id + "/movies")
      .then((res) => res.data);
  };

  getGameScreenshots = <T>(id: number) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + "/" + id + "/screenshots")
      .then((res) => res.data);
  };
}

export default APIClient;
