import React from 'react';
import './header.styles.scss'
import { connect } from "react-redux";

const Header = ({Score}) => {
    return (
        <div className = 'header'>
            <h1 className='h'>{`Current score: ${Score}`} </h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      Score: state.data.score,
    };
  };

export default connect(mapStateToProps)(Header);