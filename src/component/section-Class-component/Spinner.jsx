import React from 'react';


//props default value
const Spinner = ({message}) => {
    return (

  <div class="ui active dimmer">
    <div class="ui big text loader">{message}</div>
  </div>


    );
}

//ou derfault value props
Spinner.defaultProps= {
message: 'loading.....'
}

export default Spinner;