import React from "react";
import { Link } from "@reach/router";

const DeletedArticle = ({ title, topic }) => {
  return (
    <div className="content__container">
      <h2 className="content__message__text">
        &lt; your article '{title}' has been deleted /&gt;
      </h2>
      <Link to={`/topics/${topic}`} className="link__red">
        <h4>&#123; return to {topic} articles &#125;</h4>
      </Link>
    </div>
  );
};

export default DeletedArticle;
