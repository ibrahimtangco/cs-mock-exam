import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Mode from "../components/Mode";

function ModePages() {
  const quizModes = [
    {
      id: 1,
      url: "practice-mode",
      title: "Practice Mode",
      description: "Unlimited time, explanations after each question.",
      isImplemented: true,
    },
    {
      id: 2,
      url: "time-mock",
      title: "Timed Mock Exam",
      description:
        "Simulates the real CSE (e.g., 170 questions in 3 hours for Prof level).",
      isImplemented: false,
    },
  ];
  const location = useLocation();
  const title = location.state?.title || "";
  const navigate = useNavigate();

  return (
    <div className="container mx-auto text-gray-900 my-12 px-4">
      <div>
        <h1 className="text-center font-semibold text-2xl mb-6">{title}</h1>
      </div>
      <div className="mt-12">
        <p className="text-gray-500 text-sm font-medium mb-6">
          Choose exam mode:
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {quizModes.map((mode) => (
            <Mode key={mode.id} mode={mode} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModePages;
