import axios from "axios";


export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af1385c6096d4dc4af5565a2c7e09494",
  },
});
