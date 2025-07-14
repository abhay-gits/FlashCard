import axios from "axios";

const instance = axios.create({
  baseURL: "https://flashcard-e0o2.onrender.com",
});

export default instance;
