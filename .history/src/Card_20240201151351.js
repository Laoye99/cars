import React from "react";

const Card = (props) => {
    const { name, email, id } = 
    return (
        <div className="tc bg-gray dib br3 pa2 ma3 grow bw2 shadow-5">
        <img alt='robots' src={img} height={200} width={400} />
        <div>
            <h2>{brand}</h2>
            <p>{model}</p>
        </div>
        </div>
    );
}

export default Card;