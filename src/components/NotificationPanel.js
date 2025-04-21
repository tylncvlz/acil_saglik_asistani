// src/components/NotificationPanel.jsx
import React from "react";

const NotificationPanel = ({ bpm }) => {
  const BPM_THRESHOLD = 100;

  return (
    <div className="notification-section">
      <h3>🔔 Bildirimler</h3>

      {bpm === null && (
        <p>Veri bekleniyor...</p>
      )}

      {bpm !== null && bpm > BPM_THRESHOLD ? (
        <div className="notification warning">
          ⚠️ <strong>Yüksek Nabız Uyarısı:</strong> Nabız şu anda {bpm} BPM.
        </div>
      ) : (
        <p>Her şey normal.</p>
      )}
    </div>
  );
};

export default NotificationPanel;
