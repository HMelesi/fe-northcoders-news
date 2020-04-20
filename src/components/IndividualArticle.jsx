import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";
import { convertDate } from "../utils/utils";
import Vote from "./Vote";
import DeletedArticle from "../components/Deleted";
import Error from "../components/Error";

const IndividualArticle = ({ articleid, user }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);

  const { username } = user;
  const {
    title,
    body,
    topic,
    author,
    votes,
    comment_count,
    article_id,
    created_at,
  } = article;

  useEffect(() => {
    fetchArticle(articleid);
  }, [articleid]);

  const fetchArticle = (article_id) => {
    api
      .getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status: status, msg: data.message });
        setLoading(false);
      });
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    api.deleteArticle(value);
    setDeleted(true);
  };

  if (deleted) {
    return <DeletedArticle title={title} topic={topic} />;
  }
  if (error) {
    const { status, msg } = error;
    return <Error status={status} msg={msg} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="content__container">
      <Link to={`/topics/${topic}`} className="link__black">
        <h3>&lt; {topic} /&gt;</h3>
      </Link>
      <h2 className="content__title">&lt; {title} /&gt;</h2>
      <Link to={`/users/${author}`} className="link__red">
        <h3>{author}</h3>
      </Link>
      <h4>{convertDate(created_at)}</h4>
      {username === author ? (
        <>
          <button onClick={handleDeleteClick} value={article_id}>
            delete article
          </button>
        </>
      ) : null}

      <Vote
        votes={votes}
        id={article_id}
        username={username}
        author={author}
        type="article"
      />
      <p className="content__article__body">{body}</p>
      <Comments
        article_id={article_id}
        comment_count={comment_count}
        user={user}
      />
    </div>
  );
};

export default IndividualArticle;
