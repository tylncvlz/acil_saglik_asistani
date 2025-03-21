import React from "react";
import { useTemperature } from "../hooks/useTemperature";

const TemperatureDisplay = () => {
  const temperature = useTemperature();

  return (
    <div className="temperature-container">
      <h1>ESP32 Sıcaklık Takibi</h1>
      {temperature !== null ? (
        <p>Sıcaklık: <strong>{temperature}°C</strong></p>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
    </div>
  );
};

export default TemperatureDisplay;
