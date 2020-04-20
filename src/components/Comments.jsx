import React, { useState, useEffect } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import AddComment from "./AddComment";
import { convertDate } from "../utils/utils";
import Vote from "./Vote";
import Error from "../components/Error";

const Comments = ({ comment_count, user, article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [optimisticComments, setOptimisticComments] = useState(0);
  const [limit] = useState(10);
  const [p, setP] = useState(1);
  const [error, setError] = useState(null);

  const { username } = user;

  useEffect(() => {
    api
      .getArticleComments(article_id, limit, p)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status, msg: data.message });
        setLoading(false);
      });
  }, [p, article_id, limit]);

  const addNewComment = (comment) => {
    api.postArticleComment(article_id, comment).then((comment) => {
      setComments([comment, ...comments]);
      setOptimisticComments((optimisticComments) => optimisticComments + 1);
    });
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    api.deleteComment(value).then(() => {
      const deletedId = Number.parseInt(value);
      const remainingComments = comments.filter(
        (comment) => comment.comment_id !== deletedId
      );
      setComments(remainingComments);
      setOptimisticComments((optimisticComments) => optimisticComments - 1);
    });
  };

  const handleButtonClick = (num) => {
    setP((p) => p + num);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    const { status, msg } = error;
    return <Error status={status} msg={msg} />;
  }
  return (
    <div className="content__comments">
      <p className="content__comments__title">
        &#123; comments: {+comment_count + optimisticComments} &#125;
      </p>
      <a href="#addcomment">
        <button className="button__link__red">add comment</button>
      </a>

      <ul className="content__comments__list">
        {comments.map((comment) => {
          const { author, votes, created_at, body, comment_id } = comment;
          return (
            <li className="content__comments__list__comment" key={comment_id}>
              <h3>&lt; {author} /&gt;</h3>
              <h4>{convertDate(created_at)}</h4>

              {username === author ? (
                <>
                  <button onClick={handleDeleteClick} value={comment_id}>
                    delete comment
                  </button>
                </>
              ) : null}
              <Vote
                votes={votes}
                id={comment_id}
                username={username}
                author={author}
                type="comment"
              />

              <p>{body}</p>
            </li>
          );
        })}
      </ul>
      <section className="content__pages">
        <h4>page {p}</h4>
        <button
          onClick={() => {
            handleButtonClick(-1);
          }}
          disabled={p < 2}
        >
          ←
        </button>
        <button
          onClick={() => {
            handleButtonClick(1);
          }}
          disabled={p * limit >= comment_count}
        >
          →
        </button>
      </section>
      <section id="addcomment">
        <AddComment user={user} addNewComment={addNewComment} />
      </section>
    </div>
  );
};

export default Comments;
