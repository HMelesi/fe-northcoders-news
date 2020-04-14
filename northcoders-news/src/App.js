import "./App.css";

import React, { Component } from "react";
// import Error from "./components/Error.jsx";
import NavBar from "./components/NavBar.jsx";
import ArticleList from "./components/ArticleList.jsx";
import LoggedIn from "./components/LoggedIn.jsx";
import HeaderText from "./components/HeaderText";
// import IndividualArticle from "./components/IndividualArticle.jsx";

class App extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      name: "Jess Jelly",
    },
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <HeaderText />
          <LoggedIn user={this.state.user} />
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
