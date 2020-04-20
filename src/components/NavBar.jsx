import Collapsible from "react-collapsible";
import { Link } from "@reach/router";
import React from "react";

const NavBar = ({ topics }) => {
  return (
    <div className="navbar">
      <nav className="navbar__container">
        <Collapsible trigger="topics +" className="navbar__title">
          <ul className="navbar__list">
            {topics.map((topic) => {
              return (
                <li className="navbar__topic" key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`} className="link__black">
                    &lt; {topic.slug} /&gt;
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapsible>
      </nav>
    </div>
  );
};

export default NavBar;
