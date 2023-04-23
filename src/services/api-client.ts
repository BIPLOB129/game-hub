import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a489c9dd297f45358dd8914b97f31291",
  },
});
