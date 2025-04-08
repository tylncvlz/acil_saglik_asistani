import React from "react";
import { useTemperature } from "../hooks/useTemperature";
import { useHeartRate } from "../hooks/useHeartRate";
import { useOxygenLevel } from "../hooks/useOxygenLevel";
import { useAlertStatus } from "../hooks/useAlertStatus";

const SensorCard = ({ title, sensorType }) => {
  // Tüm Hook'ları çağırıyoruz
  const temperature = useTemperature();
  const heartRate = useHeartRate();
  const oxygenLevel = useOxygenLevel();
  const alertStatus = useAlertStatus();

  // Sensör türüne göre doğru veriyi seçiyoruz
  const sensorValues = {
    temperature,
    heartRate,
    oxygenLevel,
    alertStatus
  };

  const value = sensorValues[sensorType] ?? "Veri yükleniyor...";

  return (
    <div className="sensor-card">
      <h3>{title}</h3>
      <p><strong>{value}</strong></p>
    </div>
  );
};

export default SensorCard;
