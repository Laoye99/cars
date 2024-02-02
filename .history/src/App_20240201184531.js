import React from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox from './SearchBox';

const state =
const App = () => {
    return(
       <div className="tc">
       <h1>CarTalogue</h1>
       <SearchBox/>
        <CardList cars={cars}/>
        </div> 
    );
}

export default App;