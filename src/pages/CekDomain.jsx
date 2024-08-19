import React, { useState, useEffect } from "react";

const CekDomain = () => {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalAnalyst, setTotalAnalyst] = useState(0);
  const [totalTest, setTotalTest] = useState(0);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-apikey": import.meta.env.VITE_VIRUSTOTAL_API_KEY,
    },
  };

  const handleCheck = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    setTotalAnalyst(0);
    setTotalTest(0);

    try {
      const response = await fetch(
        `https://www.virustotal.com/api/v3/domains/${domain}`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const results = data.data.attributes.last_analysis_results;

      let nonCleanCount = 0;
      let totalAllTest = 0;

      for (const key in results) {
        if (
          results[key].result != "clean" &&
          results[key].result != "unrated"
        ) {
          nonCleanCount += 1;
        }
        totalAllTest += 1;
      }

      setTotalAnalyst(nonCleanCount);
      setTotalTest(totalAllTest);

      setResult(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4 sm:p-2">
        <div className="flex justify-center mb-4">
          <span className="text-gray-500">Powered by:  </span>
          <a
            href="https://www.virustotal.com/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            VirusTotal
          </a>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <label htmlFor="website" className="block font-medium mb-1">
              Nama Website:
            </label>
            <input
              type="text"
              id="website"
              className="border text-black border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="Enter your website"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
                setResult(null);
              }}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCheck}
          >
            Cek Website
          </button>

          {isLoading && (
            <div className="mt-4 flex justify-center items-center">
              Memproses...
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500 font-semibold">
              Error: {error}
            </div>
          )}
        </div>
        {totalTest > 0 && (
          <div className="flex justify-center items-center mb-8 mt-3">
            <div className="flex items-center space-x-4 bg-gray-700 rounded-lg p-4 shadow-md">
              {totalAnalyst > 0 ? (
                <div className="flex items-center space-x-2">
                  <div className="bg-red-500 rounded-full p-2 text-center">
                    <h2 className="text-lg font-bold text-white">
                      {totalAnalyst} / {totalTest}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm">
                      {totalAnalyst}/{totalTest} vendor keamanan menandai ini
                      domain sebagai berbahaya
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 rounded-full p-2 text-center">
                    <h2 className="text-lg font-bold text-white">
                      {totalAnalyst} / {totalTest}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm">
                      Tidak ada vendor keamanan yang menandai domain ini sebagai
                      berbahaya.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg p-4 mb-6 mt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Domain:</h2>
            <p className="text-lg">{domain ? domain : "Masukkan Domain"}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">Blogs and personal sites</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm">Registrar:</p>
              <p className="text-sm">
                {result && result.attributes && result.attributes.whois
                  ? result.attributes.whois.split("\n")[1].split(":")[1].trim()
                  : "-"}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">Creation Date:</p>
            <p className="text-sm">
              {result && result.attributes && result.attributes.creation_date
                ? new Date(
                    result.attributes.creation_date * 1000
                  ).toLocaleDateString()
                : "-"}
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">Last Analysis Date:</p>
            <p className="text-sm">
              {result &&
              result.attributes &&
              result.attributes.last_analysis_date
                ? new Date(
                    result.attributes.last_analysis_date * 1000
                  ).toLocaleDateString()
                : "-"}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Security Vendors' Analysis</h2>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {result &&
            result.attributes &&
            result.attributes.last_analysis_results && (
              <>
                {/* Display results that are not "clean" or "unrated" first */}
                {Object.entries(result.attributes.last_analysis_results)
                  .filter(
                    ([engine, data]) =>
                      data.result !== "clean" && data.result !== "unrated"
                  )
                  .map(([engine, data]) => (
                    <div
                      key={engine}
                      className="bg-gray-800 rounded-lg p-4 flex justify-between items-center"
                    >
                      <p className="text-sm">{engine}</p>
                      <div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className={`w-4 h-4 ${
                              data.category === "harmless"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v12m0 0h4m-4 0h-4m4 0h4m-4 0h-4m4 0h4m-4 0h-4m4 0h4m-4 0h-4m4 0h4m-4 0h-4m4 0h4m-4 0h-4"
                            />
                          </svg>
                          <p className="text-sm">{data.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Then, display "clean" results */}
                {Object.entries(result.attributes.last_analysis_results)
                  .filter(([engine, data]) => data.result === "clean")
                  .map(([engine, data]) => (
                    <div
                      key={engine}
                      className="bg-gray-800 rounded-lg p-4 flex justify-between items-center"
                    >
                      <p className="text-sm">{engine}</p>
                      <div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className={`w-4 h-4 ${
                              data.category === "harmless"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-sm">{data.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Finally, display "unrated" results */}
                {Object.entries(result.attributes.last_analysis_results)
                  .filter(([engine, data]) => data.result === "unrated")
                  .map(([engine, data]) => (
                    <div
                      key={engine}
                      className="bg-gray-800 rounded-lg p-4 flex justify-between items-center"
                    >
                      <p className="text-sm">{engine}</p>
                      <div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 12.447l1.245 1.245a2 2 0 01-2.828 2.828L9.163 9.163c1.638-1.638 1.638-4.293 0-5.931-1.638-1.638-4.293-1.638-5.931 0-1.638 1.638-1.638 4.293 0 5.931L8.228 12.447zM12 12v.041a8.971 8.971 0 01-.544-.022l-.39-.39c1.605-1.605 1.605-4.207 0-5.812-1.605-1.605-4.207-1.605-5.812 0l-.39.39c-1.605 1.605-1.605 4.207 0 5.812l.39.39c1.605 1.605 4.207 1.605 5.812 0l.39-.39a8.971 8.971 0 01-.544.022V12z"
                            />
                          </svg>
                          <p className="text-sm text-gray-500">{data.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default CekDomain;