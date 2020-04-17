import React from "react";
import { Link } from "@reach/router";

const ArticleTitleLink = ({ article_id, title, comment_count, votes }) => {
  return (
    <div>
      <Link to={`/articles/${article_id}`} className="link__white">
        <li className="content__article__title">
          <h4 className="content__article__title__name">{title}</h4>

          <p className="content__article__title__stats">
            &#123; votes: {votes}, comments: {comment_count} &#125;
          </p>
        </li>
      </Link>
    </div>
  );
};

export default ArticleTitleLink;
