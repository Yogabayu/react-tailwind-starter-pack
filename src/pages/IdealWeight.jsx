import axios from "axios";
import React, { useState } from "react";

const IdealWeight = () => {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [result, setResult] = useState({});

  const options = {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/idealweight",
    params: {
      height: height,
      gender: gender,
    },
    headers: {
      "X-RapidAPI-Key": "ce9e696f65msh1a41eb6a04f0d44p1ede58jsn893762cf7008",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  React.useEffect(() => {
    if (gender === "" || height === "") {
      setWarningMessage("Please fill in all fields.");
    } else {
      setWarningMessage("");
    }
  }, [gender, height]);

  async function getDatas() {
    try {
      setIsLoading(true);
      if (height === "" || gender === "") {
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
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Ideal Weight
          </h1>

          <div className="mb-4 text-center">
            <label htmlFor="gender" className="block font-medium mb-1">
              Gender:
            </label>
            <select
              id="gender"
              className="border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-center"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Pilih gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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

          <div className="text-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={getDatas}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-4">
          {warningMessage && (
            <div className="mt-4 text-red-500 font-semibold">
              {warningMessage}
            </div>
          )}

          {result !== null && status === 200 && !warningMessage && (
            <>
              <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-2">
                <div
                  className={`p-6 relative ${
                    window.innerWidth <= 767 ? "tooltip-desktop" : ""
                  }`}
                >
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 group flex relative">
                    <span>G. J. Hamwi Formula (1964)</span>
                    <span className="group-hover:opacity-100 min-w-[300px] transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute top-full -mt-5 translate-y-[-100%] translate-x-2 opacity-0">
                      Male: 48.0 kg + 2.7 kg per inch over 5 feet
                      <br />
                      Female: 45.5 kg + 2.2 kg per inch over 5 feet
                      <br />
                      Invented for medicinal dosage purposes.
                    </span>
                  </h5>

                  <p className="mb-4 text-base text-neutral-600">
                    Ideal Weight : {result.Hamwi} Kg
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-2">
                <div
                  className={`p-6 relative ${
                    window.innerWidth <= 767 ? "tooltip-desktop" : ""
                  }`}
                >
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 group flex relative">
                    <span>B. J. Devine Formula (1974)</span>
                    <span className="group-hover:opacity-100 min-w-[300px] transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute top-full -mt-5 translate-y-[-100%] translate-x-2 opacity-0">
                      Male: 50.0 kg + 2.3 kg per inch over 5 feet
                      <br />
                      Female: 45.5 kg + 2.3 kg per inch over 5 feet
                      <br />
                      Similar to the Hamwi Formula, it was originally intended
                      as a basis for medicinal dosages based on weight and
                      height. Over time, the formula became a universal
                      determinant of IBW.
                    </span>
                  </h5>

                  <p className="mb-4 text-base text-neutral-600">
                    Ideal Weight : {result.Devine} Kg
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-2">
                <div
                  className={`p-6 relative ${
                    window.innerWidth <= 767 ? "tooltip-desktop" : ""
                  }`}
                >
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 group flex relative">
                    <span>D. R. Miller Formula (1983)</span>
                    <span className="group-hover:opacity-100 min-w-[300px] transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute top-full -mt-5 translate-y-[-100%] translate-x-2 opacity-0">
                      Male: 56.2 kg + 1.41 kg per inch over 5 feet
                      <br />
                      Female: 53.1 kg + 1.36 kg per inch over 5 feet
                      <br />
                      Modification of the Devine Formula.
                    </span>
                  </h5>

                  <p className="mb-4 text-base text-neutral-600">
                    Ideal Weight : {result.Miller} Kg
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-2">
                <div
                  className={`p-6 relative ${
                    window.innerWidth <= 767 ? "tooltip-desktop" : ""
                  }`}
                >
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 group flex relative">
                    <span>J. D. Robinson Formula (1983)</span>
                    <span className="group-hover:opacity-100 min-w-[300px] transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute top-full -mt-5 translate-y-[-100%] translate-x-2 opacity-0">
                      Male: 52 kg + 1.9 kg per inch over 5 feet
                      <br />
                      Female: 49 kg + 1.7 kg per inch over 5 feet
                      <br />
                      Modification of the Devine Formula.
                    </span>
                  </h5>

                  <p className="mb-4 text-base text-neutral-600">
                    Ideal Weight : {result.Robinson} Kg
                  </p>
                </div>
              </div>
            </>
          )}

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <p className="mt-4">
            Data Source :{" "}
            <a
              href="https://rapidapi.com/malaaddincelik/api/fitness-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500"
            >
              RapidApi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdealWeight;
