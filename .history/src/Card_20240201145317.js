import React from "react";

const Card = ({img, brand, model }) => {
    return (
        <div className="tc bg-gray dib br3 pa2 ma3 grow bw2 shadow-5">
            <img alt="cars" src={`${props.img}`}
        height={200} width={400}
        />
        <div>
        <h2>{props.brand}</h2>
        <p>{props.model}</p>
        </div>
        </div>
    );
}

export default Card;