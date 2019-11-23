import React, { Component } from "react";
// state = { price: undefined, city: undefined };

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="price">
          <label className="price__label">Price</label>

          <button
            className="price__btn"
            type="button"
            id="1"
            onClick={this.props.radio}
          >
            &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="2"
            onClick={this.props.radio}
          >
            &#x20b9; &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="3"
            onClick={this.props.radio}
          >
            &#x20b9; &#x20b9; &#x20b9;
          </button>
          <button
            className="price__btn"
            type="button"
            id="4"
            onClick={this.props.radio}
          >
            &#x20b9; &#x20b9; &#x20b9; &#x20b9;
          </button>
        </div>
        <div className="city">
          <label className="city__label">City</label>
          <select className="city__input" onChange={this.props.dropdown}>
            <option value=""></option>
            <option value="New Delhi">New Delhi</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Noida">Noida</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Gurgaon">Gurgaon</option>
          </select>
        </div>
      </div>
    );
  }
}
