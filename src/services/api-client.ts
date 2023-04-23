import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e5ff2f2643d4ecead52f071bc126b53",
  },
});
