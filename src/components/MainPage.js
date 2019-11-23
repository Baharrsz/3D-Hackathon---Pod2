import React, { Component } from "react";
import Filter from "./Filter";
import data from "../data/data.json";
import DisplayFilter from "./DisplayFilter";
// import Restaurant from "./Restaurant";

export default class MainPage extends Component {
  state = {
    price: undefined,
    city: undefined,
    filtered: undefined
  };

  render() {
    if (!this.state.filtered)
      return <Filter radio={this.radio} dropdown={this.dropdown} />;
    else {
      return (
        <div>
          <Filter radio={this.radio} dropdown={this.dropdown} />
          <DisplayFilter filtered={this.state.filtered} />
        </div>
      );
    }
  }

  radio = click => {
    click.preventDefault();
    // price = click.target.id;
    this.setState({ price: Number(click.target.id) }, () => {
      this.filter();
    });
  };

  dropdown = select => {
    // city = select.target.value;
    this.setState({ city: select.target.value }, () => {
      this.filter();
    });
  };

  filter = () => {
    if (this.state.price && this.state.city) {
      console.log(this.state.price, this.state.city);
      const filtered = data.filter(restaurant => {
        return (
          //   restaurant.Price_range === this.state.price &&
          restaurant.City === this.state.city
        );
      });
      this.setState(
        {
          filtered: filtered
        },
        () => {
          console.log(this.state.filtered);
        }
      );
    }
  };
}
