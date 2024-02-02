import React from 'react';

const Scroll = (props) => {
    return(
      <div style={{ overflow}}>
      {props.children}
      </div>  
    );
};

export default Scroll;