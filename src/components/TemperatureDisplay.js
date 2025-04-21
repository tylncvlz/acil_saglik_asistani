import React from "react";
import { useTemperature } from "../hooks/useTemperature";

const TemperatureDisplay = () => {
  const temperature = useTemperature();

  return (
    <div className="sensor-content">
      <h3>🌡️ Sıcaklık</h3>
      {temperature !== null ? (
        <p className="sensor-value">{temperature} °C</p>
      ) : (
        <p className="sensor-loading">Veri yükleniyor...</p>
      )}
    </div>
  );
};

export default TemperatureDisplay;
