import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3126066d20842e9b38c91e3bab1fe4b",
  },
});
