import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="pa2">
        <input
        className="pa3 ba b--darkcyan bg-whitesmoke"
         type='search' 
         placeholder="search cars"
         onChange={searchChange}
         />
         </div>
    );
}

export default SearchBox;