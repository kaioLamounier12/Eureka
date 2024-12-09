import React, { useState } from "react";
import { createScript } from "../services/scriptService";  // Função para chamar o backend

const SubmitScriptPage = () => {
  const [content, setContent] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newScript = { content, clientName, clientEmail, clientPhone };
    await createScript(newScript);  // Envia o roteiro para o backend
    alert("Roteiro enviado com sucesso!");
  };

  return (
    <div>
      <h1>Enviar Roteiro</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Conteúdo do roteiro"
          required
        />
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Nome do Cliente"
          required
        />
        <input
          type="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          placeholder="E-mail do Cliente"
          required
        />
        <input
          type="tel"
          value={clientPhone}
          onChange={(e) => setClientPhone(e.target.value)}
          placeholder="Telefone do Cliente"
          required
        />
        <button type="submit">Enviar Roteiro</button>
      </form>
    </div>
  );
};

export default SubmitScriptPage;
