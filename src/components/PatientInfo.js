import { useState } from "react";

export default function PatientInfo() {
  const [editMode, setEditMode] = useState(false);
  const [patient, setPatient] = useState({
    name: "Ali Yılmaz",
    age: 68,
    gender: "Erkek",
    phone: "0532 000 00 00",
    height: 175,
    weight: 78,
    bloodType: "A+",
    diseases: "Hipertansiyon",
    allergies: "Yok",
    meds: "Norvasc",
    contactName: "Ayşe Yılmaz",
    contactPhone: "0532 111 11 11"
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Hasta Bilgileri</h2>
        <button
          className="text-sm text-blue-600 underline"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "İptal" : "Düzenle"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        {Object.entries(patient).map(([key, value]) => (
          <div key={key}>
            <label className="font-medium capitalize">{key}:</label>
            {editMode ? (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="border p-1 w-full rounded"
              />
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>

      {editMode && (
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setEditMode(false)}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Kaydet
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="bg-gray-400 text-white px-4 py-1 rounded"
          >
            Vazgeç
          </button>
        </div>
      )}
    </div>
  );
}
