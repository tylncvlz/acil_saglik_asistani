import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // useParams hook'unu ekledik
import { ref, onValue } from "firebase/database";
import database from "../firebase";
import TemperatureDisplay from "./TemperatureDisplay";
import "../App.css";
import COLevel from "./UsecoDisplay";
import EmergencyDisplay from "./EmergencyDisplay";
import BPMDisplay from "./NabizDisplay"
import NotificationPanel from "./NotificationPanel";
import { useBPM } from "../hooks/useHeartRate";


import { useEmergency } from "../hooks/useEmergency";

function Dashboard() {
  const bpm = useBPM();
  const { patientId } = useParams();  // URL'den gelen patientId'yi alıyoruz
  const [patientData, setPatientData] = useState(null);
  const emergency = useEmergency();
  useEffect(() => {
    // Firebase'den veriyi almak için patientId'yi dinamik olarak kullanıyoruz
    fetch(`https://acil-saglik-asistani-66abe-default-rtdb.firebaseio.com/patients/patients/${patientId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPatientData(data);
      })
      .catch((err) => {
        console.error("Veri çekilemedi:", err);
      });
  }, [patientId]);  // patientId değiştiğinde yeniden veri çekiyoruz

  return (
    <div className="main-dashboard">
      {/* Sol Panel */}
      <div className="left-panel">
        <div className="patient-header">
          
          <h3>{patientData?.adiSoyadi || "Yükleniyor..."}</h3>
        </div>

        <div className="patient-info-box">
          <p>Adı Soyadı: {patientData?.adiSoyadi}</p>
          <p>Yaş: {patientData?.yas}</p>
          <p>Cinsiyet: {patientData?.cinsiyet}</p>
          <p>Hasta Kimlik Numarası: {patientData?.kimlikNo}</p>
          <p>Telefon Numarası: {patientData?.telefon}</p>
          <p>Boyu: {patientData?.boy} cm</p>
          <p>Kilosu: {patientData?.kilo} kg</p>
          {/* Eksik veriler varsa onlar da eklenebilir */}
        </div>

        <div className="patient-notes">
          <h4>Hasta Notları:</h4>
          <textarea
            rows="6"
            defaultValue="Bugün durumu stabil... vs"
          ></textarea>
        </div>
      </div>

      {/* Sağ Panel */}
      <div className="right-panel">
        <div className="sensor-grid">
          <div className="sensor-card">
            <BPMDisplay />
          </div>
          <div className="sensor-card">
            <COLevel />
          </div>
          <div className="sensor-card">
            <TemperatureDisplay />
          </div>
          <div className="sensor-card">
  
          <EmergencyDisplay />
  </div>
        </div>

        <div className="notifications-panel">
        <NotificationPanel bpm={bpm} />

          
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
