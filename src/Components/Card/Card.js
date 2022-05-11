import React from "react";
import './Card.css';
function Card(props) {

    let temp = Math.round(Math.round(props.temperature * 100) / 100 * 10) / 10;

    const key = props.id;
    return (<div className="card">
        <p className="card__name">{props.name}</p>
        <p className="card__temp">{temp} &#176;C</p>
    </div>

    );
}
export default Card