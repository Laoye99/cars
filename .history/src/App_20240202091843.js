import React, { Component } from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
        cars: [],
        searchfield: ''   
        }
        console.log('1');
    }

    componentDidMount() {
        this.setState({ cars: cars})
        console.log('check');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const filteredCars = this.state.cars.filter(car => {
            return car.brand.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log('1');
  return(
       <div className="tc">
       <h1 className='f1'>CarTalogue</h1>
       <SearchBox searchChange={this.onSearchChange}/>
        <CardList cars={filteredCars}/>
        </div> 
    );
    }
  
}

export default App;