import axios from "axios";

const instance = axios.create({
  baseURL: "https://instagram-clone-fe.herokuapp.com/",
});

export default instance;
