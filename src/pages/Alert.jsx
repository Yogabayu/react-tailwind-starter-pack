import React, { useState } from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
