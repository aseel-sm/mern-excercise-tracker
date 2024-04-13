import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand">
          <Link to="/" className="navbar-brand">
            Exercise Tracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  {" "}
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  {" "}
                  Create User
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  {" "}
                  Create Exercise Log
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
