import React from 'react';


//props default value
const Spinner = ({message}) => {
    return (

  <div className="ui active dimmer">
    <div className="ui big text loader">{message}</div>
  </div>


    );
}

//ou derfault value props
Spinner.defaultProps= {
message: 'loading.....'
}

export default Spinner;