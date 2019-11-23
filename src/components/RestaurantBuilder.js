import React from "react";

export default function Header(props) {
  return (
    <div className="restaurant__flex">
      <img
        className="restaurant__flex-img"
        src="https://www.telegraph.co.uk/content/dam/travel/Spark/visit-dubai/rasoi-ghar.jpg?imwidth=450"
      ></img>
      <div className="restaurant__flex__container">
        <h2 className="restaurant__flex__container-name">{props.name}</h2>
        <h3 className="restaurant__flex__container-description">
          {props.description}
        </h3>
        <h3 className="restaurant__flex__container-rating">
          {props.rating} Stars
        </h3>
      </div>
    </div>
  );
}
