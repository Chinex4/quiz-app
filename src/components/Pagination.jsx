/* eslint-disable react/prop-types */
const Pagination = ({index, questions}) => {
  return (
    <div>
      <p className="text-center">
        Question {index + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Pagination;
