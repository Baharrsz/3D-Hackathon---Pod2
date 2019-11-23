import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Data from "../assets/by_record.json";

var block = 0;
var one = [];
var two = [];
var three = [];
var four = [];
var starsToFind = undefined;
var content = [];

function grabRestaurant(stars) {
  console.log(stars);
  let compare = undefined;
  if (stars === "1 star") compare = 1;
  else if (stars === "2 stars") compare = 2;
  else if (stars === "3 stars") compare = 3;
  else if (stars === "4 stars") compare = 4;
  let temp = [];
  Data.map(element => {
    if (Math.floor(element.Aggregate_rating) === compare) {
      console.log(element);
      temp.push(element);
    }
  });

  content = temp;
}

export default class PriceingChart extends Component {
  state = {
    data: {},
    flag: false,
    one: [],
    two: [],
    three: [],
    four: [],
    content: []
  };
  rating = () => {
    console.log(this.state.one);
    console.log(this.state.two);
    console.log(this.state.three);
    console.log(this.state.four);
  };

  componentDidMount() {
    // this.rating();
    Data.map(element => {
      if (Math.floor(element.Aggregate_rating) === 1) one.push(element);
      else if (Math.floor(element.Aggregate_rating) === 2) two.push(element);
      else if (Math.floor(element.Aggregate_rating) === 3) three.push(element);
      else if (Math.floor(element.Aggregate_rating) === 4) four.push(element);
    });

    this.setState({ one: one });
    this.setState({ two: two });
    this.setState({ three: three });
    this.setState({ four: four });

    this.setState({ flag: true });
    this.setState({
      data: {
        labels: ["1 star", "2 stars", "3 stars", "4 stars"],
        datasets: [
          {
            label: "Number of Restaurant ",
            backgroundColor: "#9CC69B",
            borderColor: "#79B4A9",
            data: [
              { x: "2018-01-01", y: this.state.one.length },
              { x: "2018-02-01", y: this.state.two.length },
              { x: "2018-03-01", y: this.state.three.length },
              { x: "2018-04-01", y: this.state.four.length }
            ]
          }
        ]
      }
    });
  }

  componentDidUpdate() {
    if (this.state.flag && block === 0) {
      this.setState({
        data: {
          labels: ["1 star", "2 stars", "3 stars", "4 stars"],
          datasets: [
            {
              label: "Number of Restaurant ",
              backgroundColor: "#9CC69B",
              borderColor: "#79B4A9",
              data: [
                { x: "2018-01-01", y: this.state.one.length },
                { x: "2018-02-01", y: this.state.two.length },
                { x: "2018-03-01", y: this.state.three.length },
                { x: "2018-04-01", y: this.state.four.length }
              ]
            }
          ]
        }
      });

      block = 1;
    }
  }

  carddisplay = () => {
    content.map(element => {
      return <div>{element.Restaurant_Name}</div>;
    });
  };

  render() {
    console.log(this.state.one);
    console.log(this.state.data);
    return (
      <div className="BarChart">
        <Bar
          data={this.state.data}
          width={400}
          height={500}
          options={{
            event: ["click"],
            onClick: function(c, i) {
              let e = i[0];
              var x_value = this.data.labels[e._index];
              starsToFind = x_value;
              console.log(x_value);
              grabRestaurant(starsToFind);
            },
            maintainAspectRatio: false
          }}
        />
        {this.carddisplay()}
      </div>
    );
  }
}
