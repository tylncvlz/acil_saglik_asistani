import React from "react";
import { useBPM } from "../hooks/useHeartRate"; // Hook dosyasının yolu

const BPMDisplay = () => {
  const bpm = useBPM();

  return (
    <div className="sensor-content">
      <h3>❤️ Nabız</h3>
      {bpm !== null ? (
        <p className="sensor-value" style={{ color: bpm > 100 ? "red" : "#007bff" }}>{bpm} BPM</p>
      ) : (
        <p className="sensor-loading">Veri yükleniyor...</p>
      )}
    </div>
  );
};

export default BPMDisplay;
