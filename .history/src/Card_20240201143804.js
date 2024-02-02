import React from "react";

const Card = (props) => {
    return (
        <div className="bg-gray dib br3 pa2 ma3 grow bw2 shadow-5">
        <img alt="cars" src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={200} width={400}
        />
        <div>
        <h2>{props.brand}</h2>
        <p>{props}</p>
        </div>
        </div>
    );
}

export default Card;