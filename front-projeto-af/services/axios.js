import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:6060/", // Defina a URL base da sua API
  headers: {
    "Content-Type": "application/json", // Defina os cabeçalhos padrão, se necessário
  },
});
