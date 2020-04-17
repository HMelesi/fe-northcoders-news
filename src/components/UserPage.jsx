import React from "react";
import ArticleList from "./ArticleList";

const TopicPage = ({ author }) => {
  return (
    <div>
      <h2 className="content__articlelist__title">
        &lt; all articles by {author} /&gt;
      </h2>
      <ArticleList author={author} />
    </div>
  );
};

export default TopicPage;
