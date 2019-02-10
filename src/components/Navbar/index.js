import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner"
import Scores from "../Scores"
import "./style.css";

function Navbar() {

  return (
      <nav class="navbar navbar-fixed-top navbar-dark main-nav">
        <div class="container">
        <Link className="navbar-brand" to="/">
            Clicky Game
          </Link>

          <ul class="nav navbar-nav text-center">
            <Banner />
          </ul>

          <ul class="nav navbar-nav pull-right">
              <li class="nav-item">
                <Scores />
              </li>
          </ul>
        </div>
      </nav>
    );

}

export default Navbar;
