import React, { Component } from "react";
import Restaurant from "./components/Restaurant";
import Data from "./data/data.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <Restaurant data={Data} />
      </div>
    );
  }
}
