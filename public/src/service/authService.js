import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // URL do seu backend
});

export const loginUser = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return response.data;  // Retorna o usuário logado
};
