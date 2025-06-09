import React from "react";
import { useNavigate } from "react-router-dom";

function ComingSoon() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-gray-600">501</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          🚧 Coming Soon
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          This feature is currently under development. Stay tuned!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handleClick}
            className="cursor-pointer  rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}

export default ComingSoon;
