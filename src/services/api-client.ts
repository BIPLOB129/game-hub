import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3282387f0e346e3bc139aea717bf7a0",
  },
});
