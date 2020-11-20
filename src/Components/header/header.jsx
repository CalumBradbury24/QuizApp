import React from 'react';
import './header.styles.scss'
import { connect } from "react-redux";

const Header = ({Score, scoreShown}) => {
    return (
        <div className = 'header'>
            <h1 className='h'>{scoreShown ? `Current score: ${Score}` : null} </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      Score: state.data.score,
      scoreShown: state.data.scoreShown
    };
  };

export default connect(mapStateToProps)(Header);