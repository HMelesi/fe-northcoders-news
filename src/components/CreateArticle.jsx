import React, { useState } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

const CreateArticle = ({ topics, user }) => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    topic: "",
  });
  const [postedArticle, setPostedArticle] = useState({});

  const { username } = user;

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const articleBody = { ...article, author: user.username };
    api.postArticle(articleBody).then((article) => {
      setPostedArticle(article);
      resetForm();
    });
  };

  const resetForm = () => {
    setArticle({ title: "", body: "", topic: "" });
  };

  return (
    <div className="content__container">
      <h3>&lt; submit an article /&gt;</h3>
      <div className="content__form">
        <form onSubmit={handleSubmit} id="article_form">
          <label className="content__form__label">
            <p>username: </p>
            <p className="content__form__input">{username}</p>
          </label>
          <label className="content__form__label">
            <p>title: </p>
            <input
              onChange={handleInputChange}
              className="content__form__input"
              name="title"
              value={article.title}
              required
            />
          </label>
          <label className="content__form__label">
            <p>topic: </p>
            <select
              className="content__select"
              name="topic"
              onChange={handleInputChange}
              required
              defaultValue=""
            >
              <option value="" disabled>
                choose a topic
              </option>
              {topics.map((topic) => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <div className="content__createarticle__form__large">
            <label className="content__form__label">
              <p>content: </p>

              <textarea
                name="body"
                form="article_form"
                onChange={handleInputChange}
                value={article.body}
                required
                className="content__form__input"
                rows="15"
              ></textarea>
            </label>
          </div>
          <div className="form__buttons">
            <button type="submit" className="button__link__red">
              post article
            </button>
            <button
              onClick={resetForm}
              type="reset"
              className="button__link__red"
            >
              clear fields
            </button>
          </div>
        </form>
      </div>

      {postedArticle.article_id ? (
        <Link
          to={`/articles/${postedArticle.article_id}`}
          className="link__red"
        >
          <h4>view your article '{postedArticle.title}' here</h4>
        </Link>
      ) : null}
    </div>
  );
};

export default CreateArticle;
