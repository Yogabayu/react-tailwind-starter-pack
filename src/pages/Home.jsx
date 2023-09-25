import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Alert from "./Alert";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkMediaQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    darkMediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }, []);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-center">
        {/* BMI */}
        <div className="max-w-sm min-w-[300px] min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${theme === "light" ? "#000000" : "#ffffff"}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Body Mass Index (BMI)
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Klik untuk cek Body Mass Index (BMI)
          </p>
          <NavLink
            to="/bmi"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Check
            <svg
              className="w-3 h-3 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </NavLink>
        </div>

        {/* Daily */}
        <div className="max-w-sm min-w-[300px] min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${theme === "light" ? "#000000" : "#ffffff"}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Daily Calory Requirement
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Klik untuk cek kebutuhan kalori anda dalam sehari
          </p>
          <NavLink
            to="/daily"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Check
            <svg
              className="w-3 h-3 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
            {showAlert && (
              <Alert
                message="Fitur masih dalam pengembangan."
                onClose={handleCloseAlert}
              />
            )}
          </NavLink>
        </div>

        {/* Disc */}
        <div className="max-w-sm min-w-[300px] min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${theme === "light" ? "#000000" : "#ffffff"}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
            <circle cx="12" cy="10" r="3" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Test DiSC
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Klik untuk melakukan tes DISc personality
          </p>
          <a
            href="https://disc.yogabayuap.com"
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Check
            <svg
              className="w-3 h-3 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:justify-center">
        {/* ideal weight */}
        <div className="max-w-sm min-w-[300px] min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke={`${theme === "light" ? "#000000" : "#ffffff"}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Ideal Weight
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Klik untuk melihat berat badan ideal anda
          </p>
          <NavLink
            to="/idealweight"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Check
            <svg
              className="w-3 h-3 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
