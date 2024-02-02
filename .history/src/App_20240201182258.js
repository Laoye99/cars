import React from "react";
import CardList from './CardList';
import { cars } from './cars';

const App = () => {
    return(
        <h1>Car</h1>
        <CardList cars={cars}/>
    );
}

export default App;