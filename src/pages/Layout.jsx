import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import siteLogo from "../images/logo_site.png";

// Buat komponen styled untuk header

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // Tema default
  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkMediaQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // Menambahkan event listener untuk perubahan tema
    darkMediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <nav
          className={`bg-white dark:bg-gray-800 px-4 lg:px-6 py-2.5 border-${
            theme === "light" ? "gray" : "gray-700"
          } rounded-lg m-4`}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* <a href="#" > */}
            <NavLink className="flex items-center" to="/">
              <img
                src={siteLogo}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                fitApp
              </span>
            </NavLink>
            {/* </a> */}
            <div className="flex items-center lg:order-2">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={`block py-2 pr-4 pl-3 text-${
                      theme === "light" ? "black" : "white"
                    } rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0`}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bmi"
                    className={`block py-2 pr-4 pl-3 text-${
                      theme === "light" ? "black" : "white"
                    } rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0`}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    BMI
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/daily"
                    className={`block py-2 pr-4 pl-3 text-${
                      theme === "light" ? "black" : "white"
                    } rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0`}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    Daily Requirement
                  </NavLink>
                </li>
                 <li>
                  <a href="https://disc.yogabayuap.com" target="_blank" className={`block py-2 pr-4 pl-3 text-${
                      theme === "light" ? "black" : "white"
                    } rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0`}
                    >DiSC</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow py-2 px-5">
        <Outlet />
      </main>

      {/* Footer */}

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://yogabayuap.com/"
              target="_blank"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img src={siteLogo} className="h-8 mr-3" alt="Apssss Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                fitApp
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="mr-4 hover:underline md:mr-6">
                  Privacy
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://yogabayuap.com/"
              className="hover:underline"
              target="_blank"
            >
              fitApp
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
