import React from "react";
import Card from "../Card/Card";
import "./CardsBox.css";
export default function CardsBox(props) {

  const filt = props.arr.map(i => (i.id));
  filt.sort((a, b) => a - b);

  return (
    <div className="cardsBox">
      {props.arr.map(i => (
        <Card name={i.name} temperature={i.temperature} key={i.id} />
      ))}
    </div>
  );
}
