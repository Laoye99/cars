import React, { Component } from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox from './SearchBox';

const state = {
   
}
class App extends Component {
    constructor() {
        this.state = {
        cars: cars,
        searchfield: ''   
        }
    }
    render() {
  return(
       <div className="tc">
       <h1>CarTalogue</h1>
       <SearchBox/>
        <CardList cars={cars}/>
        </div> 
    );
    }
  
}

export default App;