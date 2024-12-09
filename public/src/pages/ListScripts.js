import React, { useEffect, useState } from "react";
import { getScripts } from "../services/scriptService";

const ListScripts = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const fetchScripts = async () => {
      const response = await getScripts();
      setScripts(response.data);
    };
    fetchScripts();
  }, []);

  return (
    <div>
      <h1>Lista de Roteiros</h1>
      <ul>
        {scripts.map((script) => (
          <li key={script.id}>
            {script.content} - Status: {script.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListScripts;
