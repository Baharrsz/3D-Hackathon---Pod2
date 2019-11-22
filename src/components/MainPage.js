import React, { Component } from "react";
import Filter from "./Filter";
import data from "../assets/by_record.json";

export default class MainPage extends Component {
  render() {
    console.log(data);
    return (
      <div>
        <Filter />
        {/* < /> */}
        {/* <DisplayFilter filtered={} /> */}
      </div>
    );
  }

  radio = click => {
    click.preventDefault();
    price = click.target.id;
    // this.setState({ price: click.target.id });
  };

  dropdown = select => {
    city = select.target.value;
    // this.setState({ city: select.target.value });
  };
}
