import api from "./api";

export const createScript = async (script) => {
  return await api.post("/scripts", script);
};

export const getScripts = async () => {
  return await api.get("/scripts");
};

export const updateScriptStatus = async (id, status) => {
  return await api.put(`/scripts/${id}`, null, { params: { status } });
};
