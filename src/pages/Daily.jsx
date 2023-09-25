import React, { useState, useEffect } from "react";
import axios from "axios";

const Daily = () => {
  const [age, setAge]       = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [result, setResult] = useState({});
  const [warningMessage, setWarningMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0);

  React.useEffect(() => {
    if (
      age === "" ||
      gender === "" ||
      weight === "" ||
      height === "" ||
      activityLevel === ""
    ) {
      setWarningMessage("Please fill in all fields.");
    } else {
      setWarningMessage("");
    }
  }, [age, gender, weight, height, activityLevel]);

  const options = {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/dailycalorie",
    params: {
      age: age,
      gender: gender,
      height: parseFloat(height),
      weight: parseFloat(weight),
      activitylevel: activityLevel,
    },
    headers: {
      "X-RapidAPI-Key": "ce9e696f65msh1a41eb6a04f0d44p1ede58jsn893762cf7008",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  async function getDatas() {
    try {
      setIsLoading(true);
      if (
        age === "" ||
        gender === "" ||
        weight === "" ||
        height === "" ||
        activityLevel === ""
      ) {
        setWarningMessage("Please fill in all fields.");
      } else {
        setWarningMessage("");
        const response = await axios.request(options);
        if (response.status === 200) {
          setStatus(200);
          setResult(response.data.data);
        } else {
          setStatus(500);
          setWarningMessage("error");
        }
      }
    } catch (error) {
      setWarningMessage(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Daily Requirement Calculator
          </h1>

          <div className="mb-4 text-center">
            <label htmlFor="age" className="block font-medium mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-center"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="gender" className="block font-medium mb-1">
              Gender:
            </label>
            <select
              id="gender"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Pilih gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="weight" className="block font-medium mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-center"
              placeholder="Enter your weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="height" className="block font-medium mb-1">
              Height (cm):
            </label>
            <input
              type="number"
              id="height"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-center"
              placeholder="Enter your height in centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="activitylevel" className="block font-medium mb-1">
              Activity Level:
            </label>
            <select
              id="activitylevel"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs mx-auto"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option>Pilih activity</option>
              <option value="level_1">
                Level 1: Sedikit olahraga atau tanpa olahraga
              </option>
              <option value="level_2">Level 2: Latihan 1-3 kali/minggu</option>
              <option value="level_3">Level 3: Latihan 4-5 kali/minggu</option>
              <option value="level_4">
                Level 4: Olahraga harian atau olahraga intens 3-4 kali/minggu
              </option>
              <option value="level_5">
                Level 5: Olahraga intens 6-7 kali/minggu
              </option>
              <option value="level_6">
                Level 6: Olahraga yang sangat intens setiap hari, atau pekerjaan
                fisik
              </option>
            </select>
          </div>
          {isLoading ? (
            <div className="text-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Calculating
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={getDatas}
              >
                Calculate
              </button>
            </div>
          )}

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          {isLoading && status !== 200 ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2 text-center">
                BMR: Loading...
              </h2>
              <h2 className="font-semibold mb-2">Goals:</h2>
              <table className="border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th className="border border-slate-700 p-2">Goal</th>
                    <th className="border border-slate-700 p-2">Value</th>
                    <th className="border border-slate-700 p-2">Loss/Gain</th>
                    <th className="border border-slate-700 p-2">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <tr key={index}>
                      <td className="border border-slate-700 p-2 animate-pulse">
                        Loading...
                      </td>
                      <td className="border border-slate-700 p-2 animate-pulse">
                        Loading...
                      </td>
                      <td className="border border-slate-700 p-2 animate-pulse">
                        Loading...
                      </td>
                      <td className="border border-slate-700 p-2 animate-pulse">
                        Loading...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : status === 0 ? (
            <div>
              {warningMessage && (
                <div className="mt-4 text-red-500 font-semibold text-center">
                  {warningMessage}
                </div>
              )}
            </div>
          ) : (
            <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
              {result.BMR !== null && !warningMessage && (
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2 text-center">
                    BMR: {parseFloat(result.BMR).toFixed(2)}
                  </h2>
                  <h2 className="font-semibold mb-2">Goals:</h2>
                  <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-700 p-2">Goal</th>
                        <th className="border border-slate-700 p-2">Value</th>
                        <th className="border border-slate-700 p-2">
                          Loss/Gain
                        </th>
                        <th className="border border-slate-700 p-2">
                          Calories
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Maintain weight
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["maintain weight"]
                            ? parseFloat(
                                result.goals["maintain weight"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">-</td>
                        <td className="border border-slate-700 p-2">-</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Mild weight loss
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Mild weight loss"]
                            ? parseFloat(
                                result.goals["Mild weight loss"]["loss weight"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">Loss</td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Mild weight loss"]
                            ? parseFloat(
                                result.goals["Mild weight loss"]["calory"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Weight loss
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Weight loss"]
                            ? parseFloat(
                                result.goals["Weight loss"]["loss weight"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">Loss</td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Weight loss"]
                            ? parseFloat(
                                result.goals["Weight loss"]["calory"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Mild weight gain
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Mild weight gain"]
                            ? parseFloat(
                                result.goals["Mild weight gain"]["gain weight"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">Gain</td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Mild weight gain"]
                            ? parseFloat(
                                result.goals["Mild weight gain"]["calory"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Weight gain
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Weight gain"]
                            ? parseFloat(
                                result.goals["Weight gain"]["gain weight"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">Gain</td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Weight gain"]
                            ? parseFloat(
                                result.goals["Weight gain"]["calory"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-700 p-2">
                          Extreme weight gain
                        </td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Extreme weight gain"]
                            ? parseFloat(
                                result.goals["Extreme weight gain"][
                                  "gain weight"
                                ]
                              ).toFixed(2)
                            : "-"}
                        </td>
                        <td className="border border-slate-700 p-2">Gain</td>
                        <td className="border border-slate-700 p-2">
                          {result.goals && result.goals["Extreme weight gain"]
                            ? parseFloat(
                                result.goals["Extreme weight gain"]["calory"]
                              ).toFixed(2)
                            : "-"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">
            Daily Calorie Calculator
          </h2>
          <p className="mt-4">
            Dengan menggunakan kalkulator ini untuk kebutuhan kalori Anda,
            persamaan ini memperhitungkan jenis kelamin, usia, tinggi badan,
            berat badan saat ini, dan tingkat olahraga Anda. Angka yang
            dihasilkan kemudian akan menjadi asupan kalori harian yang
            direkomendasikan untuk gaya hidup Anda, yang kemudian dapat Anda
            sesuaikan untuk menurunkan berat badan, menambah berat badan, atau
            mempertahankan hal-hal yang sesuai dengan berat badan Anda. Untuk
            visual matematisnya, rumusnya sebagai berikut untuk wanita, dimana
            BMI dihitung 655,1 + (9,563 x berat badan dalam kg) + (1,850 x
            tinggi badan dalam cm) - (4,676 x umur dalam tahun), dan untuk pria,
            BMR = 66,47 + (13,75 x berat badan dalam kg) + (5,003 x tinggi badan
            dalam cm) - (6,755 x umur dalam tahun). Kemudian dikalikan dengan
            tingkat aktivitas Anda, dengan Menetap sebanyak BMR x 1,2, Aktif
            ringan sebanyak BMR x 1,375, Aktif Sedang sebanyak BMR x 1,55, Aktif
            sebanyak BMR x 1,725, dan terakhir sangat aktif dihitung BMR x 1,9.
          </p>
          <h2 className="text-xl font-semibold mt-4">Activity Level</h2>

          <ul className="list-disc list-inside mt-2">
            <li>level_1 = Sedikit olahraga atau tanpa olahraga</li>
            <li>level_2 = Latihan 1-3 kali/minggu</li>
            <li>level_3 = Latihan 4-5 kali/minggu</li>
            <li>
              level_4 = Olahraga harian atau olahraga intens 3-4 kali/minggu
            </li>
            <li>level_5 = Olahraga intens 6-7 kali/minggu</li>
            <li>
              level_6 = Olahraga yang sangat intens setiap hari, atau pekerjaan
              fisik
            </li>
                  </ul>
                  
          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <p className="mt-4">Data Source : <a href="https://rapidapi.com/malaaddincelik/api/fitness-calculator" target="_blank" rel="noopener noreferrer" className="text-sky-500">RapidApi</a></p>
        </div>
      </div>
    </div>
  );
};

export default Daily;
