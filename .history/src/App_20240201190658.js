import React, { Component } from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
        cars: cars,
        searchfield: ''   
        }
    }

    onSearchChange(event) {
        console.log(event);
    }
    render() {
  return(
       <div className="tc">
       <h1>CarTalogue</h1>
       <SearchBox searchC/>
        <CardList cars={this.state.cars}/>
        </div> 
    );
    }
  
}

export default App;