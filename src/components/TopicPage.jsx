import React from "react";
import ArticleList from "./ArticleList";
import { Link } from "@reach/router";

const TopicPage = ({ topic }) => {
  return (
    <div>
      <h2 className="content__articlelist__title">&lt; {topic} /&gt;</h2>
      <ArticleList topic={topic} />
    </div>
  );
};

export default TopicPage;
