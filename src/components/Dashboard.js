import React from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import "../App.css";

function Dashboard() {
  return (
    <div className="main-dashboard">
      {/* Sol Panel */}
      <div className="left-panel">
        <div className="patient-header">
          <img src="https://via.placeholder.com/50" alt="avatar" />
          <h3>Ali Yılmaz</h3>
        </div>

        <div className="patient-info-box">
          <p>Adı Soyadı : Ali Yılmaz</p>
          <p>Yaş: 65</p>
          <p>Cinsiyet: Erkek</p>
          <p>Hasta Kimlik Numarası: 123456789</p>
          <p>Telefon Numarası: 0555 123 45 67</p>
          <p>Boyu: 170 cm</p>
          <p>Kilosu: 75 kg</p>
          <p>Kan Grubu: A+</p>
          <p>Teşhis: KOAH</p>
          <p>Alerjiler: Penisilin</p>
          <p>Kullandığı İlaçlar: İlac-1, İlac-2</p>
          <p>Hasta Yakını Adı: Ayşe Yılmaz</p>
          <p>Hasta Yakını Telefonu: 0555 987 65 43</p>
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
            <h4>❤️ Nabız</h4>
            <p>Veri bekleniyor...</p>
          </div>
          <div className="sensor-card">
            <h4>💨 Oksijen</h4>
            <p>Veri bekleniyor...</p>
          </div>
          <div className="sensor-card">
            <TemperatureDisplay />
          </div>
          <div className="sensor-card alert-box">
            <h4>🚨 Acil Durum</h4>
            <p>Butona basıldı mı?</p>
          </div>
        </div>

        <div className="notifications-panel">
          <h4>🔔 Bildirimler</h4>
          <div className="notification-card">
            <strong>Nabız</strong>
            <p>Hastanın nabzı eşik değerin üstüne çıktı.</p>
            <span className="notif-time">12:34 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
