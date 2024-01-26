/* eslint-disable react/prop-types */
const ResultPage = ({questions, score, reset}) => {
  return (
    <>
      <div>
        <p className="text-xl">You Passed: {score} question(s)</p>
        <p className="text-xl">
          You Failed: {questions.length - score} question(s)
        </p>
      </div>

      <div className="w-full grid place-items-center">
        <button
          onClick={reset}
          className="w-full md:w-52 rounded py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition-all"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ResultPage;
