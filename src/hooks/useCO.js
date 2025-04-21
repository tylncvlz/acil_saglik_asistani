import { useState, useEffect } from "react";

const API_URL = "http://192.168.137.2/data"; // ESP32'nin IP adresi

export function useCO() {
  const [co, setCO] = useState(null);

  useEffect(() => {
    const fetchCO = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCO(data.co);
      } catch (error) {
        console.error("CO verisi alınamadı:", error);
      }
    };

    fetchCO();
    const interval = setInterval(fetchCO, 2000); // 2 saniyede bir güncelle

    return () => clearInterval(interval);
  }, []);

  return co;
}
