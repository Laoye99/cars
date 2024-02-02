import React from 'react';

const Scroll = (props) => {
    return(
      <div style={{ overflowY: 'scroll', borser}}>
      {props.children}
      </div>  
    );
};

export default Scroll;