import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      body: "",
      topic: "",
    },
    postedArticle: {},
  };

  // componentDidMount = () => {
  //   const { username } = this.props.user;
  //   this.setState((currentState) => {
  //     return { article: { ...currentState.article, author: username } };
  //   });
  // };

  render() {
    const { title, body } = this.state.article;
    const { topics, user } = this.props;
    return (
      <div className="content__container">
        <h3>&lt; submit an article /&gt;</h3>
        <div className="content__form">
          <form onSubmit={this.handleSubmit} id="article_form">
            <label className="content__form__label">
              <p>username: </p>
              <p className="content__form__input">{user.username}</p>
            </label>
            <label className="content__form__label">
              <p>title: </p>
              <input
                onChange={this.handleInputChange}
                className="content__form__input"
                name="title"
                value={title}
                required
              />
            </label>
            <label className="content__form__label">
              <p>topic: </p>
              <select
                className="content__select"
                name="topic"
                onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                  value={body}
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
                onClick={this.resetForm}
                type="reset"
                className="button__link__red"
              >
                clear fields
              </button>
            </div>
          </form>
        </div>

        {this.state.postedArticle.article_id ? (
          <Link
            to={`/articles/${this.state.postedArticle.article_id}`}
            className="link__red"
          >
            <h4>view your article '{this.state.postedArticle.title}' here</h4>
          </Link>
        ) : null}
      </div>
    );
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState((currentState) => {
      return { article: { ...currentState.article, [name]: value } };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.props;
    const article = { ...this.state.article, author: user.username };
    api.postArticle(article).then((article) => {
      this.setState({
        postedArticle: article,
        article: { title: "", body: "", topic: "" },
      });
    });
  };

  resetForm = () => {
    this.setState((currentState) => {
      return {
        article: { ...currentState.article, title: "", body: "", topic: "" },
      };
    });
  };
}

export default CreateArticle;
