import React from "react";
import CardList from './CardList';
import { cars } from './cars';

const App = () => {
    return(
       <div></div> <h1>CarTalogue</h1>
        <CardList cars={cars}/>
    );
}

export default App;