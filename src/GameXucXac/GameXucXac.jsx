import React, { Component } from "react";
import "../assets/GameXucXac/css/style.css";
import Result from "./Result";
import Tai from "./Tai";
import Xiu from "./Xiu";

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row py-5">
          <div className="col-4">
            <Tai />
          </div>
          <div className="col-4">
            <Result />
          </div>
          <div className="col-4">
            <Xiu />
          </div>
        </div>
      </div>
    );
  }
}
