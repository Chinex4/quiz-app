// eslint-disable-next-line react/prop-types
const NextButton = ({next}) => {
  return (
    <div className="w-full grid place-items-center">
      <button
        onClick={next}
        className="w-full md:w-52 rounded py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
