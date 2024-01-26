/* eslint-disable react/prop-types */
const QUestion = ({index, question}) => {
  return (
    <div>
      <p>
        {index + 1}. {question.question}
      </p>
    </div>
  );
};

export default QUestion;
