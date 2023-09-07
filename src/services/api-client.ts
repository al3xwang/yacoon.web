import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c2703f79b1e42de858fa0a298f4c71e",
  },
});
