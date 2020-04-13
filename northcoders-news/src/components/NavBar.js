import React, { Component } from "react";
import Collapsible from "react-collapsible";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="navbar__container">
            <Collapsible trigger="< topics />" className="navbar__title">
              <ul className="navbar__list">
                <li className="navbar__topic">&lt; first topic /&gt;</li>
                <li className="navbar__topic">&lt; second topic /&gt;</li>
                <li className="navbar__topic">&lt; third topic /&gt;</li>
                <li className="navbar__topic">&lt; fourth topic /&gt;</li>
              </ul>
            </Collapsible>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
