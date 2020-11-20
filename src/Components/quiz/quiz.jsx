import React, { useState } from "react";
import { questions } from "../../Questions";
import Score from '../Score/Score';
import { connect } from "react-redux";
import { setScore } from "../../Redux/actions";
import "./quiz.styles.scss";

const Quiz = ({ onScoreChange }) => {
  const [question, setQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleClick = (guess) => {
    if (guess) {
      onScoreChange();
    }
    const nextQuestion = question + 1;
    if (nextQuestion < questions.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <React.Fragment>
      {showScore ? (
       <Score />
      ) : (
        <div className="container">
          <div className="title-and-question">
            <h2 className="title">
              Question {`${question + 1}/${questions.length}`}
            </h2>
            <p className="question">{questions[question].questionText}</p>
          </div>
          <div className="answers">
            {questions[question].answerOptions.map((option) => (
              <button
                className="btn"
                onClick={() => handleClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScoreChange: () => dispatch(setScore()),
  };
};

export default connect(null, mapDispatchToProps)(Quiz);
