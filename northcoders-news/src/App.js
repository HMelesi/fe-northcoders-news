import "./App.css";

import React, { Component } from "react";
// import Error from "./components/Error";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
// import IndividualArticle from "./components/IndividualArticle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__text">&lt; northcoders news /&gt;</h1>
        </header>
        <NavBar />
        <div className="content">
          <ArticleList />
          {/* <IndividualArticle /> */}
          {/* <Error /> */}
        </div>
      </div>
    );
  }
}

export default App;
