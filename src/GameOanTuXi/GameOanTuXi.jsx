import React, { Component } from "react";
import Computer from "./Computer";
import Players from "./Players";
import Result from "./Result";
import "../assets/GameOanTuXi/css/buble.css";

export default class GameOanTuXi extends Component {
  render() {
    return (
      <div className="bg__img-home">
        <div className="row">
          <div className="col-4">
            <Players />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <Result />
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
