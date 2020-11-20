import React from 'react'
import './ProgressBar.styles.scss';

const ProgressBar = ({value}) => {
   
    return (
        <div className="progress-bar">
          <Filler percentage={value} />
        </div>
      )
    }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
  
export default ProgressBar
  
  