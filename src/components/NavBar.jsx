import Collapsible from "react-collapsible";
import { Link } from "@reach/router";
import React from "react";

const NavBar = ({ topics }) => {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar__container">
          <Collapsible trigger="< topics />" className="navbar__title">
            <ul className="navbar__list">
              {topics.map((topic) => {
                return (
                  <Link
                    to={`/topics/${topic.slug}`}
                    key={topic.slug}
                    className="link__black"
                  >
                    <li className="navbar__topic">&lt; {topic.slug} /&gt;</li>
                  </Link>
                );
              })}
            </ul>
          </Collapsible>
          <Link to="/user/createarticle" className="link__red">
            <p>create an article =></p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
