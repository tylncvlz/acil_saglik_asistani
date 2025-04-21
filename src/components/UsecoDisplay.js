import React from "react";
import { useCO } from "../hooks/useCO";

function COLevel() {
  const co = useCO();

  return (
    <div className="sensor-content">
      <h3>💨 Karbon Monoksit</h3>
      {co !== null ? (
        <p className="sensor-value">{co} ppm</p>
      ) : (
        <p className="sensor-loading">Yükleniyor...</p>
      )}
    </div>
  );
}

export default COLevel;
