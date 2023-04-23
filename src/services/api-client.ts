import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7a77fe5facf2411fbfdc5e44e5258e65",
  },
});
