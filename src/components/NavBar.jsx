import React, { Component } from "react";
import Collapsible from "react-collapsible";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount = () => {
    this.fetchTopics();
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="navbar">
        <nav>
          <div className="navbar__container">
            <Collapsible trigger="< menu />" className="navbar__title">
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
            <Link
              to="/user/createarticle"
              className="link__red"
              topics={this.state.topics}
            >
              <p>create an article =></p>
            </Link>
          </div>
        </nav>
      </div>
    );
  }

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default NavBar;
