import React from "react";

export default function Header(props) {
  return (
    <div className="restaurant">
      <img src="https://www.telegraph.co.uk/content/dam/travel/Spark/visit-dubai/rasoi-ghar.jpg?imwidth=450"></img>
      <div className="restaurant-flex">
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h3>{props.rating}</h3>
      </div>
    </div>
  );
}
