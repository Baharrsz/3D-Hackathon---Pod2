import React, { Component } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Data from "./data/data.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="restaurant">
          <h1 className="restaurant-title">variable Star Restaurant</h1>

          <Restaurant data={Data} />
        </div>
      </div>
    );
  }
}
