import { useState, useEffect } from "react";

const API_URL = "http://10.34.214.129/data"; // ESP32'nin API adresi

export function useTemperature() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTemperature(data.temperature);
      } catch (error) {
        console.error("API'den veri alınamadı:", error);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 2000); // Her 2 saniyede bir veri çek

    return () => clearInterval(interval);
  }, []);

  return temperature;
}
