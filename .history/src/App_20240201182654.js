import React from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox

const App = () => {
    return(
       <div>
       <h1>CarTalogue</h1>
       <SearchBox/>
        <CardList cars={cars}/>
        </div> 
    );
}

export default App;