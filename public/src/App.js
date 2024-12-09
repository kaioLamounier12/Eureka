import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmitScript from "./pages/SubmitScript";
import ListScripts from "./pages/ListScripts";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SubmitScriptPage from "./pages/SubmitScriptPage";
import StatusPage from "./pages/StatusPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitScript />} />
        <Route path="/scripts" element={<ListScripts />} />
        <Route path="/" element={<LoginPage />} />
          <Route path="/submit" element={<SubmitScriptPage />} />
          <Route path="/status" element={<StatusPage />} />
      </Routes>
    </Router>
  );
};
  

export default App;
