import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc937c05fefe4ebeb1b799024741640f",
  },
});
