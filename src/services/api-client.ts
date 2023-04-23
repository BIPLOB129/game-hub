import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68291e94a1a24e6584b145e96331fd4c",
  },
});
