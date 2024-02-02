import React from "react";
import { cars } from "./cars";
import Card from './Card';

const CardList = ({cars}) => {
    const cardComponent = cars.map((user, i) => {
        return <Card id ={cars[i].id} brand={cars[i].brand} model ={cars[i].model} img ={cars[i].img}/>
    })
  return (
    <div>
    
    </div>
  );  
}
export default CardList;