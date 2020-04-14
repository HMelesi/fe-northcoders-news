import React from "react";
import ArticleList from "./ArticleList";

const Homepage = () => {
  return (
    <div>
      <h2 className="content__title">&lt; all articles /&gt;</h2>
      <ArticleList />
    </div>
  );
};

export default Homepage;
