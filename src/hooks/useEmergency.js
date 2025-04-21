import { useState, useEffect } from "react";

const API_URL = "http://192.168.137.2/data"; // ESP32 IP

export function useEmergency() {
  const [emergency, setEmergency] = useState(false);

  useEffect(() => {
    const fetchEmergency = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setEmergency(data.emergency === true);
      } catch (err) {
        console.error("Acil durum verisi alınamadı:", err);
      }
    };

    fetchEmergency();
    const interval = setInterval(fetchEmergency, 2000);
    return () => clearInterval(interval);
  }, []);

  return emergency;
}
