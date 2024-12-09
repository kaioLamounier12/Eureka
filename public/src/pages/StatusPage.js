import React, { useState, useEffect } from "react";
import { getScriptStatus } from "../services/scriptService";

const StatusPage = () => {
  const [scriptId, setScriptId] = useState("");
  const [status, setStatus] = useState(null);

  const checkStatus = async () => {
    const result = await getScriptStatus(scriptId);
    setStatus(result.status);
  };

  return (
    <div>
      <h1>Consultar Status do Roteiro</h1>
      <input
        type="text"
        placeholder="ID do Roteiro"
        value={scriptId}
        onChange={(e) => setScriptId(e.target.value)}
      />
      <button onClick={checkStatus}>Ver Status</button>
      {status && <p>Status do Roteiro: {status}</p>}
    </div>
  );
};

export default StatusPage;
