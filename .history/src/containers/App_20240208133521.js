import React, {useState, useEffect} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //     cars: [],
    //     searchfield: ''   
    //     }
    // }
    const [cars, setCars] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    // componentDidMount() {
    //     fetch('https://my-json-server.typicode.com/Laoye99/cars/cars')
    //     .then(response=> response.json())
    //     .then(cars => this.setState({ cars: cars}));
    //     }

    useEffect(()=> {
             fetch('https://my-json-server.typicode.com/Laoye99/cars/cars')
        .then(response=> response.json())
        .then(cars => this.setState({ cars: cars}));
    })

    const onSearchChange = (event) => {
        setSearchfield( event.target.value)
    }
        const filteredCars = cars.filter(car => {
            return car.brand.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !cars.length ?
            <h1>Loading</h1>:
        (
       <div className="tc">
       <h1 className='f1'>CarTalogue</h1>
       <SearchBox searchChange={onSearchChange}/>
       <Scroll>
       <ErrorBoundary>
       <CardList cars={filteredCars}/>
       </ErrorBoundary>
       </Scroll>
        </div> 
    );
    
};

export default App;