// src/components/EmergencyDisplay.js
import React from "react";
import { useEmergency } from "../hooks/useEmergency";

const EmergencyDisplay = () => {
  const emergency = useEmergency();

  return (
    <div className={` ${emergency ? "alert-box" : ""}`}>
      <h3>🚨 Acil Durum</h3>
      <p>{emergency ? "‼️ Butona basıldı!" : "Butona basılmadı."}</p>
    </div>
  );
};

export default EmergencyDisplay;
