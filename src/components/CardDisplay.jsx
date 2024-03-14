import React from "react";
import Card from "./Card";

const CardDisplay = () => {
  const { data } = require("../../counties.json");

  return (
    <div className="card-display">
      <h1>Counties in Kenya</h1>
      <ul>
        {data.map((county) => (
          <Card key={county.code} county={county} />
        ))}
      </ul>
    </div>
  );
};

export default CardDisplay;