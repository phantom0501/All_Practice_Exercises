import React, { Component } from "react";
import Menu from "./Menu";
import "../assets/Burger/css/burger.css";
import { connect } from "react-redux";

class Burger extends Component {
  renderBurgerDetail = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMidContent = [];
      for (let i = 0; i < value; i++) {
        breadMidContent.push(<div key={i} className={propsBurger}></div>);
      }

      return breadMidContent;
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="burger">
              <div className="breadTop"></div>
              {this.renderBurgerDetail()}
              <div className="breadBottom"></div>
            </div>
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
  };
};

export default connect(mapStateToProps, null)(Burger);
