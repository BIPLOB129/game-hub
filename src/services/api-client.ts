import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89c800b7924a47c4a12dcb6b0453e97a",
  },
});
