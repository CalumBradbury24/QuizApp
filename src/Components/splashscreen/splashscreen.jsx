import React from "react";
import "./splashscreen.styles.scss";
import { Link } from "react-router-dom";

const Splashscreen = () => {
  return (
    <div>
      <Link
        className='start-link'
        to="/quiz"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default Splashscreen;
