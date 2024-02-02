import React from "react";


const CardList = () => {
  return (
    <div>
    <Card id ={cars[0].id} brand={cars[0].brand} model ={cars[0].model} img ={cars[0].img}/>
    <Card id ={cars[1].id} brand={cars[1].brand} model ={cars[1].model} img ={cars[1].img}/>
    <Card id ={cars[2].id} brand={cars[2].brand} model ={cars[2].model} img ={cars[2].img}/>
    <Card id ={cars[3].id} brand={cars[3].brand} model ={cars[3].model} img ={cars[3].img}/>
    <Card id ={cars[4].id} brand={cars[4].brand} model ={cars[4].model} img ={cars[4].img}/>
    </div>
  );  
}
export default CardList;