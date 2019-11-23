import React, { Component } from "react";
import Restaurant from "./Restaurant";

export default class App extends Component {
  render() {
    return (
      <div>
        <Restaurant data={this.props.filtered} />
      </div>
    );
  }
}
