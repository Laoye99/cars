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

    onSearchChange = (event) => {
        this.setState()
        const filteredCars = this.state.cars.filter(car => {
            return car.brand.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredCars);
    }
    render() {
  return(
       <div className="tc">
       <h1>CarTalogue</h1>
       <SearchBox searchChange={this.onSearchChange}/>
        <CardList cars={this.state.cars}/>
        </div> 
    );
    }
  
}

export default App;