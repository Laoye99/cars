import React from "react";

const Card = (props) => {
    return (
        <div className="tc bg-gray dib br3 pa2 ma3 grow bw2 shadow-5">
        <img alt="cars" src='https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/camry/mlp/highlight-gallery/CAH_MY21_0003_V002_desktop_cQEfQ2Ljfke852Np6Zr9Onv2YpPH.png?fmt=jpeg&fit=crop&qlt=90&wid=1024'
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