import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Mode({ mode }) {
  const navigate = useNavigate();
  const { slug } = useParams();

  const handleClick = () => {
    if (!mode.isImplemented) {
      navigate("/coming-soon");
    } else {
      navigate(`/category/${slug}/${mode.url}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer border-2 font-semibold border-gray-800 text-gray-800 py-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
    >
      {mode.title}
    </button>
  );
}

export default Mode;
