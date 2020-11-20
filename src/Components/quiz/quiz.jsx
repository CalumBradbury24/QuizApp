import React, { useState } from "react";
import { questions } from "../../Questions";
import Score from "../Score/Score";
import { connect } from "react-redux";
import { setScore } from "../../Redux/actions";
import "./quiz.styles.scss";
import ProgressBar from "../progressbar/ProgressBar";
const length = questions.length;

const Quiz = ({ onScoreChange }) => {
  const [question, setQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = useState((1/questions.length)*100)

  const handleClick = (guess) => {
    if (guess) {
      onScoreChange();
    }
    var nextQuestion = question + 1;
    let prog = ((nextQuestion+1)/questions.length) * 100

    if (nextQuestion < questions.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setProgress(prog)
  };

  return (
    <React.Fragment>
      {showScore ? (//check async
        <Score numOfQuestions={length}/>
      ) : (
        <div className = 'page'>
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
        <ProgressBar value = {progress}/>
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
