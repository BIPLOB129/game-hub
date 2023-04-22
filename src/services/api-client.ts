import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b783a2341716435a8453285425785090",
  },
});
