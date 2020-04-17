import "./App.css";
import { Router } from "@reach/router";
import React, { Component } from "react";
import Error from "./components/Error.jsx";
import NavBar from "./components/NavBar.jsx";
import Homepage from "./components/Homepage";
import LoggedIn from "./components/LoggedIn.jsx";
import HeaderText from "./components/HeaderText";
import TopicPage from "./components/TopicPage";
import IndividualArticle from "./components/IndividualArticle.jsx";
import Footer from "./components/Footer";
import CreateArticle from "./components/CreateArticle";
import UserPage from "./components/UserPage";
import * as api from "./utils/api";

class App extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      name: "Jess Jelly",
    },
    topics: [],
  };

  componentDidMount = () => {
    this.fetchTopics();
    if (localStorage.user !== undefined) {
      this.setState({ user: JSON.parse(localStorage.user) });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <HeaderText />
          <LoggedIn
            user={this.state.user}
            handleUserChange={this.handleUserChange}
            handleUserSubmit={this.handleUserSubmit}
          />
        </header>
        <NavBar topics={this.state.topics} />
        <Router className="content">
          <Homepage path="/" />
          <TopicPage path="/topics/:topic" />
          <UserPage path="/users/:author" />
          <IndividualArticle
            path="/articles/:article_id"
            user={this.state.user}
          />
          <CreateArticle
            path="/user/createarticle"
            user={this.state.user}
            topics={this.state.topics}
          />
          <Error
            default
            status={404}
            msg={"the page you are looking for does not seem to exist"}
          />
        </Router>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

  handleUserChange = (event) => {
    const { value } = event.target;
    api.getUser(value).then((user) => {
      this.setState({ user });
      window.localStorage.setItem("user", JSON.stringify(user));
    });
  };

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default App;
