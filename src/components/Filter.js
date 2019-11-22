import React, { Component } from "react";
// state = { price: undefined, city: undefined };

let price = undefined;
let city = undefined;

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="price">
          <label className="price__label">Price</label>

          <button
            className="price__btn"
            type="button"
            id="one"
            onClick={this.radio}
          >
            &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="two"
            onClick={this.radio}
          >
            &#x20b9; &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="three"
            onClick={this.radio}
          >
            &#x20b9; &#x20b9; &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="four"
            onClick={this.radio}
          >
            &#x20b9; &#x20b9; &#x20b9; &#x20b9;
          </button>
        </div>
        <div className="city">
          <label className="city__label">City</label>
          <select className="city__input" onChange={this.dropdown}>
            <option value=""></option>
            <option value="newDelhi">New Delhi</option>
            <option value="ghaziabad">Ghaziabad</option>
            <option value="noida">Noida</option>
            <option value="faridabad">Faridabad</option>
            <option value="gurgaon">Gurgaon</option>
          </select>
        </div>
      </div>
    );
  }
}
