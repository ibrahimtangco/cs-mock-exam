import React from "react";
import { useNavigate } from "react-router-dom";

function Score({ score, totalQuestion }) {
  const percentage = (score / totalQuestion) * 100;
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  } ${circumference}`;
  const status = [
    {
      percent: 0,
      greetings: "Don't Give Up!",
      message: "Everyone starts somewhere. Try again and you'll improve.",
    },
    {
      percent: 20,
      greetings: "Better Luck Next Time",
      message: "Review the material and give it another go.",
    },
    {
      percent: 40,
      greetings: "Keep Trying",
      message: "You're getting there. Stay motivated!",
    },
    {
      percent: 50,
      greetings: "Almost There",
      message: "You’re halfway there. Don’t stop now!",
    },
    {
      percent: 60,
      greetings: "Not Bad",
      message: "Good effort! A little more practice and you’ll get it.",
    },
    {
      percent: 70,
      greetings: "Good Job",
      message: "You're doing well! Keep up the momentum.",
    },
    {
      percent: 80,
      greetings: "Great Work!",
      message: "You're close to the top. Just a bit more to master it.",
    },
    {
      percent: 90,
      greetings: "Excellent!",
      message: "You’re almost perfect. One step away from 100%.",
    },
    {
      percent: 100,
      greetings: "Perfect Score!",
      message: "Outstanding! You've mastered this quiz.",
    },
  ];
  const matchedStatus = status
    .filter((s) => s.percent <= percentage)
    .sort((a, b) => b.percent - a.percent)[0];

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative size-60">
        <svg
          className="rotate-[135deg] size-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="1.5"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeLinecap="round"
          ></circle>

          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-blue-800"
            strokeWidth="1.5"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-medium text-gray-700">
              Your Score
            </span>
            <span className="text-5xl font-bold text-blue-800">
              {score}/{totalQuestion}
            </span>
          </div>
        </div>
      </div>
      {/* status */}
      <div className="mt-4 text-center space-y-2 w-full mb-4">
        <h2 className="text-gray-900 text-3xl font-semibold">
          {matchedStatus.greetings}
        </h2>
        <p className="text-lg text-gray-700">{matchedStatus.message}</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="tracking-wide font-medium cursor-pointer py-2 px-6 rounded-lg border border-gray-900 transition-colors duration-300 ease-in-out bg-gray-900 text-white hover:bg-gray-700 "
      >
        Go back home
      </button>
    </div>
  );
}

export default Score;
