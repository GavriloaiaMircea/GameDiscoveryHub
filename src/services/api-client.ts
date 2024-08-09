import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af1385c6096d4dc4af5565a2c7e09494",
  },
});


class APIClient<T>{
  endpoint: string;

  constructor(endpoint:string){
    this.endpoint=endpoint;
  }

  getAll = (config:AxiosRequestConfig) => {
    return axiosInstance
          .get<FetchResponse<T>>(this.endpoint,config)
          .then((res)=>res.data)
  }
}

export default APIClient;