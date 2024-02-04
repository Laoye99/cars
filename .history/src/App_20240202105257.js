import React, { Component } from "react";
import CardList from './CardList';
import { cars } from './cars';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
        cars: [],
        searchfield: ''   
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/Laoye99/cars/cars')
        .then(resp)
        this.setState({ cars: cars})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const filteredCars = this.state.cars.filter(car => {
            return car.brand.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
  return(
       <div className="tc">
       <h1 className='f1'>CarTalogue</h1>
       <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
       <CardList cars={filteredCars}/>
       </Scroll>
        
        </div> 
    );
    }
  
}

export default App;