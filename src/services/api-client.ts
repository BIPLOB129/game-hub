import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2cef70833c2f46dba26850e8c7d464cf",
  },
});
