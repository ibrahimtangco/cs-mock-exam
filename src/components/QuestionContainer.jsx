import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function QuestionContainer({
  question,
  totalQuestion,
  questionNum,
  handleNextEvent,
  handlePreviousEvent,
  setScore,
  score,
  answers,
  setAnswers,
  noSelectedErr,
  setNoSelectedErr,
  setIsSubmitted,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();
  const handleQuit = () => {
    navigate("/");
  };

  useEffect(() => {
    setSelectedOption(answers[questionNum] || null);
  }, [questionNum, answers]);

  const handleOnClickOption = (correctAns, userAns) => {
    const prevAnswer = answers[questionNum];
    if (prevAnswer !== userAns) {
      if (prevAnswer === correctAns && userAns !== correctAns) {
        setScore(score - 1);
      } else if (prevAnswer !== correctAns && userAns === correctAns) {
        setScore(score + 1);
      }
    }

    setAnswers((prev) => ({ ...prev, [questionNum]: userAns }));
    setNoSelectedErr("");
  };
  return (
    <div className="shadow-[0px_0px_23px_-2px_rgba(0,_0,_0,_0.2)] p-4 rounded-lg max-w-3xl w-full space-y-6 md:p-6">
      {/* heading */}
      <div className="flex items-center justify-between font-medium text-sm">
        <span className="text-gray-800">
          Question: {questionNum + 1}/{totalQuestion}
        </span>
        <button onClick={handleQuit} className="text-red-600 cursor-pointer">
          Quit
        </button>
      </div>
      {/* question */}
      <p className="text-gray-900 font-semibold text-lg">{question.question}</p>
      {/* options */}
      <div className="grid md:grid-cols-2 gap-4">
        {question.choices.map((choice, index) => (
          <button
            onClick={() => handleOnClickOption(question.correctAnswer, choice)}
            key={index}
            className={`p-4 rounded-lg shadow-[0px_0px_20px_-2px_rgba(0,_0,_0,_0.2)] text-left cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-900 hover:text-white active:bg-green-500 ${
              selectedOption === choice
                ? "bg-green-600 hover:bg-green-600 text-white"
                : ""
            }`}
          >
            {choice}
          </button>
        ))}
      </div>
      <p className="text-red-600 text-sm italic">{noSelectedErr}</p>
      {/* actions */}
      <div className="flex gap-4 items-center justify-end mt-10">
        {questionNum + 1 !== 1 && (
          <button
            onClick={handlePreviousEvent}
            className="tracking-wide font-medium cursor-pointer py-2 px-6 rounded-lg border border-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
          >
            Previous
          </button>
        )}
        {questionNum + 1 !== totalQuestion && (
          <button
            onClick={handleNextEvent}
            className="tracking-wide font-medium cursor-pointer py-2 px-10 rounded-lg border border-gray-900 bg-gray-900 text-white hover:bg-gray-700 hover:border-gray-700 transition-colors duration-300 ease-in-out"
          >
            Next
          </button>
        )}
        {questionNum + 1 === totalQuestion && (
          <button
            onClick={() => setIsSubmitted(true)}
            className="tracking-wide font-medium cursor-pointer py-2 px-10 rounded-lg border border-green-900 bg-green-900 text-white hover:bg-green-700 hover:border-green-700 transition-colors duration-300 ease-in-out"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionContainer;
