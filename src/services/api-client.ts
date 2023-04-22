import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "06c2754f50fb4558944baee6ab6bb98c",
  },
});
