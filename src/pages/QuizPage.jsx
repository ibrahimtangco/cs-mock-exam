import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionContainer from "../components/QuestionContainer";
import Loading from "../components/Loading";
import Score from "../components/Score";

function QuizPage() {
  const { slug } = useParams();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [noSelectedErr, setNoSelectedErr] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fetchDataErr, setFetchDataErr] = useState("");

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${slug}.json`);
        const allQuestions = data.default;

        // Shuffle the array
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());

        // Get the first 30 unique questions
        const selected = shuffled.slice(0, 30);

        setQuestions(selected);
      } catch (error) {
        setFetchDataErr(`Failed to load questions for ${slug}:`, error);
        setQuestions([]);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    if (slug) loadQuestions();
  }, [slug]);

  const handleNextEvent = () => {
    if (!answers[questionNum]) {
      setNoSelectedErr("Please select an answer before proceeding.");
      return;
    }

    setNoSelectedErr("");
    setQuestionNum(questionNum + 1);
  };

  const handlePreviousEvent = () => {
    setQuestionNum(questionNum - 1);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-gray-900 my-12 px-4">
          <div>
            <h1 className="text-center font-semibold text-2xl mb-6">
              {questions.length} Questions for {formattedTitle}
            </h1>
          </div>
          <div className="mt-8 md:mt-12 flex items-center justify-center">
            {fetchDataErr ? (
              <p className="text-red-500">{fetchDataErr}</p>
            ) : (
              <>
                {!isSubmitted ? (
                  <QuestionContainer
                    question={questions[questionNum]}
                    totalQuestion={questions.length}
                    questionNum={questionNum}
                    handleNextEvent={handleNextEvent}
                    handlePreviousEvent={handlePreviousEvent}
                    setScore={setScore}
                    score={score}
                    answers={answers}
                    setAnswers={setAnswers}
                    noSelectedErr={noSelectedErr}
                    setNoSelectedErr={setNoSelectedErr}
                    setIsSubmitted={setIsSubmitted}
                  />
                ) : (
                  <Score score={score} totalQuestion={questions.length} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default QuizPage;
