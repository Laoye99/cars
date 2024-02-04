import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
        .then(response=> response.json())
        .then(cars => this.setState({ cars: cars}));
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const { cars, searchfield } = this.state;
        const filteredCars = cars.filter(car => {
            return car.brand.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !cars.length
            return <h1>Loading</h1>
        }   else{
  return(
       <div className="tc">
       <h1 className='f1'>CarTalogue</h1>
       <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
       <CardList cars={filteredCars}/>
       </Scroll>
        
        </div> 
    );
    };
};
  
}

export default App;