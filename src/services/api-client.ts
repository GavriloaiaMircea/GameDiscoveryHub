import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b757540bb7b4c4ab8d6639750dd94a8",
  },
});
