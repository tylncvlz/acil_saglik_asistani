import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [patientId, setPatientId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (patientId) {
      navigate(`/dashboard/${patientId}`);
    } else {
      alert("Lütfen bir hasta ID girin.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🩺 Hasta Takip Girişi</h2>
        <input
          type="text"
          placeholder="Hasta ID girin"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Login;
