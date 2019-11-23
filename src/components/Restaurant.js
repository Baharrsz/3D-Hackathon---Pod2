import React from "react";
import Builder from "./RestaurantBuilder";

export default function Restaurant(props) {
  console.log(props);

  return props.data ? (
    props.data.map(data => {
      return (
        <>
          <Builder
            name={data.Restaurant_Name}
            description={data.Cuisines}
            rating={data.Aggregate_rating}
          ></Builder>
        </>
      );
    })
  ) : (
    <div>Loading......</div>
  );
}
