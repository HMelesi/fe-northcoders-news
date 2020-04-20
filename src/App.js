import "./App.css";
import { Router } from "@reach/router";
import React, { useState, useEffect } from "react";
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
import * as hooks from "./hooks/hooks";

const App = () => {
  const [user, setUser] = hooks.useLocalStorage("user", {
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
  });
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then((topics) => {
      setTopics(topics);
    });
    setUser(user);
  }, [user, setUser]);

  const handleUserChange = (event) => {
    const { value } = event.target;
    api.getUser(value).then((user) => {
      setUser(user);
    });
  };

  return (
    <div className="App">
      <header className="header">
        <HeaderText />
        <LoggedIn user={user} handleUserChange={handleUserChange} />
      </header>
      <NavBar topics={topics} />
      <Router className="content">
        <Homepage path="/" />
        <TopicPage path="/topics/:topic" />
        <UserPage path="/users/:author" />
        <IndividualArticle path="/articles/:articleid" user={user} />
        <CreateArticle path="/user/createarticle" user={user} topics={topics} />
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
};

export default App;
