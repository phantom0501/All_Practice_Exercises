import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Modal from "./Modal";

export default class BookingTicket extends Component {
  render() {
    return (
      <div className="wrapper__ticket">
        <Modal />
        <Header />
        <div className="container">
          <Home />
        </div>
      </div>
    );
  }
}
