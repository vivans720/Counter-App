import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Counter App</h1>
          <p className="text-gray-600 mb-8">A simple React counter</p>

          <div className="mb-8">
            <div className="text-6xl font-bold text-indigo-600 mb-2">
              {count}
            </div>
            <p className="text-gray-500">Current Count</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCount(count>0? count - 1 : 0)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
            >
              <span className="text-2xl">−</span>
            </button>

            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
            >
              Reset
            </button>

            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
