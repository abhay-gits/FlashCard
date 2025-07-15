import axios from "axios";

const instance = axios.create({
  baseURL: "https://flashcard-blja.onrender.com",
});

export default instance;
