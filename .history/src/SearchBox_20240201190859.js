import React from "react";

const SearchBox = ({searchf}) => {
    return(
        <div className="pa2">
        <input
        className="pa3 ba b--darkcyan bg-lightest-blue"
         type='search' 
         placeholder="search cars"/>
         </div>
    );
}

export default SearchBox;