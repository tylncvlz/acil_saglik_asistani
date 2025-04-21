// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";  // Login sayfası
import Dashboard from "./components/Dashboard";  // Dashboard sayfası

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />  {/* Login sayfası */}
      <Route path="/dashboard/:patientId" element={<Dashboard />} />  {/* Hasta ID'ye göre Dashboard */}
    </Routes>
  </Router>
  );
}

export default App;
