import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner"
import Scores from "../Scores"
import "./style.css";

function Navbar() {

  return (
      <nav className="navbar navbar-fixed-top navbar-dark main-nav">
        <div className="container">
        <Link className="navbar-brand" to="/">
            Clicky Game
          </Link>

          <ul className="nav navbar-nav text-center">
            <Banner />
          </ul>

          <ul className="nav navbar-nav pull-right">
              <li className="nav-item">
                <Scores />
              </li>
          </ul>
        </div>
      </nav>
    );

}

export default Navbar;
