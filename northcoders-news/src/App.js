import Collapsible from "react-collapsible";
import "./App.css";
import ArticleTitle from "./components/ArticleTitle";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__text">&lt;northcoders news /&gt;</h1>
        </header>
        <nav className="navbar">
          <div className="navbar__container">
            <ul className="navbar__list">
              <li>&lt;first topic /&gt;</li>
              <li>&lt;second topic /&gt;</li>
              <li>&lt;third topic /&gt;</li>
              <li>&lt;fourth topic /&gt;</li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <div className="content__container">
            <h2>&lt;all articles /&gt;</h2>
            <ul className="content__articlelist">
              <li className="content__articletitle">
                <p>first article title</p>
                <p>&#123; votes: 18, comments: 3 &#125;</p>
              </li>
              <li className="content__articletitle">
                <p>second article title</p>
                <p>&#123; votes: 18, comments: 3 &#125;</p>
              </li>
              <li className="content__articletitle">
                <p>third article title</p>
                <p>&#123; votes: 18, comments: 3 &#125;</p>
              </li>
              <li className="content__articletitle">
                <Collapsible trigger={<ArticleTitle />}>
                  <p color="blue">
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </Collapsible>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
