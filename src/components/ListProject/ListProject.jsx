import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../../assets/ListProject/ListProject.css';

export default class ListProject extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__overlay"></div>
        <nav className="header__navbar navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="###">
              Navbar
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="####">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="###">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#####"
                    id="dropdownId"
                    data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                  >
                    Lessons
                  </a>
                  <div className="dropdown-menu main__menu" aria-labelledby="dropdownId">
                    <NavLink className="dropdown-item" to="/demolayout">
                      Layout Simple
                    </NavLink>
                    <NavLink className="dropdown-item" to="/gameoantuxi">
                      Game Oan Tu Xi
                    </NavLink>
                    <NavLink className="dropdown-item" to="/gamexucxac">
                      Game Xuc Xac
                    </NavLink>
                    <NavLink className="dropdown-item" to="/burger">
                      Burger
                    </NavLink>
                    <NavLink className="dropdown-item" to="/booking-ticket">
                      Booking Ticket
                    </NavLink>
                    <NavLink className="dropdown-item" to="/choose-car">
                      Car Hooks
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
