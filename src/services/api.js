import axios from "axios";

const api = axios.create({
  baseURL: "http:\\projetomaosdadas.emcomp.com.br",
});

export default api;
