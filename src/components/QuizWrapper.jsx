import { useRef, useState } from "react";
import questions from "../questions.json";
import Header from "./Header";
import ResultPage from "./ResultPage";
import QUestion from "./QUestion";
import Pagination from "./Pagination";
import NextButton from "./NextButton";

const QuizWrapper = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);

  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_arr = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    const answerIndexObject = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    };

    const currentIndex = answerIndexObject[question.answer];

    if (!lock) {
      if (question.answer == ans) {
        e.target.classList.remove("bg-slate-100", "border-slate-300");
        e.target.classList.add("bg-green-200", "border-green-300");
        setLock(true);
        setScore((prevScore) => prevScore + 1);
      } else {
        e.target.classList.remove("bg-slate-100", "border-slate-300");
        e.target.classList.add("bg-red-200", "border-red-300");
        setLock(true);
        console.log(question.answer);

        if (currentIndex !== undefined && option_arr[currentIndex]?.current) {
          option_arr[currentIndex].current.classList.add(
            "bg-green-200",
            "border-green-300"
          );
          option_arr[currentIndex].current.classList.remove(
            "bg-slate-100",
            "border-slate-300"
          );
        }
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(questions[index]);
      setLock(false);
      option_arr.map((opt) => {
        opt.current.classList.remove(
          "bg-green-200",
          "bg-red-200",
          "border-red-300",
          "border-green-300"
        );
        opt.current.classList.add("bg-slate-100", "border-slate-300");
      });
    }
  };

  const reset = () => {
    setIndex(0)
    setLock(false)
    setQuestion(questions[index])
    setResult(false)
    setScore(0)
  }

  return (
    <div className="w-[370px] md:w-[530px] bg-white rounded py-8 px-6 space-y-5">
      {/* Header */}
      <Header />

      {result ? (
        <>
          <ResultPage questions={questions} score={score} reset={reset}/>
        </>
      ) : (
        <>
          {/* Question */}
          <QUestion question={question} index={index}/>

          {/* Options */}
          <div>
            <ul className="space-y-5">
              <li
                ref={option1}
                onClick={(e) => checkAns(e, "A")}
                className="bg-slate-100 px-4 py-4 cursor-pointer rounded border border-slate-300"
              >
                {question.A}
              </li>
              <li
                ref={option2}
                onClick={(e) => checkAns(e, "B")}
                className="bg-slate-100 px-4 py-4 cursor-pointer rounded border border-slate-300"
              >
                {question.B}
              </li>
              <li
                ref={option3}
                onClick={(e) => checkAns(e, "C")}
                className="bg-slate-100 px-4 py-4 cursor-pointer rounded border border-slate-300"
              >
                {question.C}
              </li>
              <li
                ref={option4}
                onClick={(e) => checkAns(e, "D")}
                className="bg-slate-100 px-4 py-4 cursor-pointer rounded border border-slate-300"
              >
                {question.D}
              </li>
            </ul>
          </div>
          {/* Button */}
          <NextButton next={next} />
          {/* Pagination */}
          <Pagination questions={questions} index={index} />
        </>
      )}
    </div>
  );
};

export default QuizWrapper;
