import React from "react";
import Card from './Card';

const CardList = ({cars}) => {
    const cardComponent = cars.map((user, i) => {
        return 
        (
        <Card 
        key={i} 
        id ={cars[i].id} 
        brand={cars[i].brand} 
        model ={cars[i].model} 
        img ={cars[i].img}
        />
        )
    })
  return (
    <div>
    {cardComponent}
    </div>
  );  
}
export default CardList;