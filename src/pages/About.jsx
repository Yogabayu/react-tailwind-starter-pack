import React from "react";

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold  mb-6">Tentang fitApp</h1>
          <p>
            <b>fitApp</b> adalah sebuah aplikasi web yang dirancang untuk membantu dalam kehidupan sehari-hari Anda. Kami menyediakan berbagai fitur yang
            dapat membantu Anda seperti melakukan pengecekan website, mengukur BMI, sampai melihat hasil tes DiSC.
          </p>
          <p>Dengan fitApp, Anda dapat:</p>
          <ul className="list-disc list-inside  mt-2">
            <li>Melakukan Pengecekan Website sebelum mengunjunginya, sehingga keamanan anda tetap terjaga (fitur powered by <a href="https://www.virustotal.com/" target="_blank">Virustotal.com</a> )</li>
            <li>Menghitung Body Mass Index (fitur powered by <a href="https://www.rapidapi.com/" target="_blank">rapidapi.com</a> )</li>
            <li>Menghitung Kebutuhan Kalori harian</li>
            <li>Melakukan Tes DiSC (tes kepribadian yang biasa digunakan di perusahaan).</li>
            <li>Melakukan perhitungan berat badan ideal.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
