import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "372708e7d75943a2b357b5f4ac46f81c",
  },
});
