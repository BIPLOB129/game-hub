import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5cefa5120e8d40d3b5bf12309ff6b163",
  },
});
