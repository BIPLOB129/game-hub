import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "88c7d6c965de42a5bfb0257ad7e4af49",
  },
});
