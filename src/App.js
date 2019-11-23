import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Chart from "./components/PriceingChart";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Chart />
    </div>
  );
}
