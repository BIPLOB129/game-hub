import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be21e9b90c2c415792b9c8362fa055bb",
  },
});
