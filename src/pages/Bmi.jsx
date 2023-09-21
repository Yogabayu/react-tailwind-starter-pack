import React, { useState } from "react";

const Bmi = () => {
  // State untuk menyimpan berat badan, tinggi, dan usia
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [hasilKualitas, setHasilKualitas] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [saran, setSaran] = useState("");
  const [kualitasBmi, setKualitasBmi] = useState("");

  // State untuk menyimpan hasil perhitungan BMI
  const [bmiResult, setBmiResult] = useState(null);

  // State untuk menyimpan pesan peringatan
  const [warningMessage, setWarningMessage] = useState("");

  // Fungsi untuk menghitung BMI
  const calculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (parseInt(age) < 18) {
      setWarningMessage(
        "Anda harus berusia 18 tahun atau lebih untuk menggunakan kalkulator BMI."
      );
      setHasilKualitas("");
      setKeterangan("");
      setSaran("");
      setKualitasBmi("");
      setBmiResult(null);
    } else {
      const bmi = weightInKg / (heightInM * heightInM);

      if (bmi.toFixed(2) < 18.5) {
        setHasilKualitas("Berat Badan Kurang");
        setKeterangan("Anda Kekurangan berat badan.");
        setSaran(
          "Karena Anda memiliki BMI di bawah 18.5, disarankan untuk menghubungi dokter mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
        );
        setKualitasBmi("Hasil BMI < 18.5");
      } else if (bmi.toFixed(2) >= 18.5 && bmi.toFixed(2) <= 22.9) {
        setHasilKualitas("Normal");
        setKeterangan("Anda memiliki berat badan ideal.");
        setSaran(
          "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga keseimbangan antara pola makan dan aktivitas fisik Anda."
        );
        setKualitasBmi("Hasil BMI di antara 18.5 dan 22.9");
      } else if (bmi.toFixed(2) >= 23 && bmi.toFixed(2) <= 25) {
        setHasilKualitas("Berat Badan Lebih");
        setKeterangan("Anda memiliki berat badan berlebih.");
        setSaran(
          "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan dan berolahraga."
        );
        setKualitasBmi("Hasil BMI di antara 23 dan 25");
      } else {
        setHasilKualitas("Obesitas");
        setKeterangan("Anda berada dalam kategori obesitas.");
        setSaran(
          "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga pola makan dan aktivitas fisik."
        );
        setKualitasBmi("Hasil BMI lebih dari 25");
      }

      setBmiResult(bmi.toFixed(2));
      setWarningMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-semibold mb-4">BMI Calculator</h1>

          {/* Input Form */}
          <div className="mb-4">
            <label htmlFor="age" className="block font-medium mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="weight" className="block font-medium mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="height" className="block font-medium mb-1">
              Height (cm):
            </label>
            <input
              type="number"
              id="height"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your height in centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          {/* Output */}
          {warningMessage && (
            <div className="mt-4 text-red-500 font-semibold">
              {warningMessage}
            </div>
          )}

          {bmiResult !== null && !warningMessage && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold mb-2">{hasilKualitas}</h2>
              <p className="text-md mb-2">{kualitasBmi}</p>
              <p className="text-2xl font-bold mb-2">BMI: {bmiResult}</p>
              <p className="text-lg mb-2">Keterangan:</p>
              <p className="text-lg mb-2">{keterangan}</p>
              <p className="text-lg mb-2">Saran:</p>
              <p className="text-lg mb-2">{saran}</p>
            </div>
          )}
        </div>
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">
            BMI Calculator Features
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li>Menghitung berat badan.</li>
            <li>Menentukan kategori berat badan ideal atau tidak.</li>
            <li>Mempersiapkan program penurunan berat badan.</li>
          </ul>
          <p className="mt-4">
            Kalkulator ini hanya boleh digunakan oleh orang dewasa (wanita hamil
            atau menyusui tidak boleh mengandalkan pembacaan BMI ini) dan tidak
            ada tindakan yang harus diambil berdasarkan nilainya selain
            berkonsultasi dengan orang yang memenuhi syarat seperti dokter.
          </p>

          <p className="mt-4">
            Kalkulator akan memberi Anda gambaran tentang perbandingan berat
            badan Anda dengan nilai umum. Indeks Massa Tubuh (atau BMI) dihitung
            sebagai berat badan Anda (dalam kilogram) dibagi dengan kuadrat
            tinggi badan Anda (dalam meter) atau BMI = Kg/M2.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
