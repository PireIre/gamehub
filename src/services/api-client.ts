import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "94e60e65fc7944a99e3996bf110789e4",
  },
});