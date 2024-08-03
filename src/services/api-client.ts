import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af1385c6096d4dc4af5565a2c7e09494",
  },
});
