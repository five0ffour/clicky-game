import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner"
import Scores from "../Scores"
import "./style.css";

function Navbar(props) {

  return (
      <nav className="navbar navbar-fixed-top navbar-dark main-nav">
        <div className="container">
        <Link className="navbar-brand" to="/">
            Looney Tunes Clicky Game
          </Link>

          <ul className="nav navbar-nav text-center">
            <Banner message={props.message} />
          </ul>

          <ul className="nav navbar-nav pull-right">
              <li className="nav-item">
                <Scores current={props.current} top={props.top}/>
              </li>
          </ul>
        </div>
      </nav>
    );

}

export default Navbar;
