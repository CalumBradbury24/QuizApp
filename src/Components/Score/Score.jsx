import React, { useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import "./Score.styles.scss";

const Score = ({ Score }) => {
const [name, setName] = useState('');

  const handleSubmit = (e) => {
   e.preventDefault();//Prevent default HTML submit form behaviour so other code below can run
    const result = {
        name: name,
        score: Score,
    }
    axios.post('https://warm-hollows-14958.herokuapp.com/', result)
        .then(res => console.log(res.data)) //Log result to console

        window.alert('Submitted!')
  }

  return (
    <div className = 'form-container'>
      <h1 className="contact-title">{`Your score was: ${Score}`} </h1>
      <form className="contact-form">
        <h1 className="contact-title" id='submit-message'>Please submit your name!</h1>
        <input
          className="input-box"
          type="text"
          name="user_name"
          placeholder="Name"
          autoComplete="off"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <span className="input-button-span">
          <input className="input-button" type="submit" value="Submit" onClick = {(e) => handleSubmit(e)} />
        </span>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Score: state.data.score,
  };
};

export default connect(mapStateToProps)(Score);
