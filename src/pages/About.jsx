import React from "react";

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold  mb-6">Tentang fitApp</h1>
          <p>
            fitApp adalah sebuah aplikasi web yang dirancang untuk membantu Anda
            mencapai tujuan kebugaran Anda. Kami menyediakan berbagai fitur yang
            dapat membantu Anda melacak aktivitas fisik, mengatur jadwal
            latihan, dan memantau perkembangan Anda.
          </p>
          <p>Dengan fitApp, Anda dapat:</p>
          <ul className="list-disc list-inside  mt-2">
            <li>Memantau jumlah langkah harian Anda.</li>
            <li>Mencatat kalori yang Anda bakar selama latihan.</li>
            <li>Melihat statistik tentang berat badan dan BMI Anda.</li>
            <li>Merencanakan rutinitas latihan dan diet Anda.</li>
          </ul>
          <p>
            Kami berkomitmen untuk membantu Anda mencapai kesehatan dan
            kebugaran yang optimal melalui fitApp. Terima kasih telah memilih
            kami sebagai teman Anda dalam perjalanan kebugaran Anda!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
