import React from 'react';

const Scroll = (props) => {
    return(
      <div style={{ overflowY}}>
      {props.children}
      </div>  
    );
};

export default Scroll;