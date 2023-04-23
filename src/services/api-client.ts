import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "517cf715587a4014957cb51d28704108",
  },
});
