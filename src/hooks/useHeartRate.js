import { useState, useEffect } from "react";

const API_URL = "http://192.168.137.2/data"; // ESP32'nin API adresi

export function useBPM() {
  const [bpm, setBPM] = useState(null);

  useEffect(() => {
    const fetchBPM = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBPM(data.bpm);
      } catch (error) {
        console.error("BPM verisi alınamadı:", error);
      }
    };

    fetchBPM();
    const interval = setInterval(fetchBPM, 2000); // 2 saniyede bir veri güncelle

    return () => clearInterval(interval);
  }, []);

  return bpm;
}
