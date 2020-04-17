import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      body: "",
      topic: "",
      author: "",
    },
    postedArticle: {},
  };

  componentDidMount = () => {
    const { username } = this.props.user;
    this.setState((currentState) => {
      return { article: { ...currentState.article, author: username } };
    });
  };

  render() {
    const { author, title, body } = this.state.article;
    const { topics } = this.props;
    return (
      <div className="content__container">
        <h3>&lt; submit an article /&gt;</h3>

        <form
          onSubmit={this.handleSubmit}
          className="content__createarticle__form"
        >
          <label className="content__createarticle__label">
            <p>username = </p>
            <p className="content__createarticle__input">{author}</p>
          </label>
          <label className="content__createarticle__label">
            <p>title = </p>
            <input
              onChange={this.handleInputChange}
              className="content__createarticle__input"
              name="title"
              value={title}
              required
            />
          </label>
          <label className="content__createarticle__label">
            <p>topic = </p>
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
          <label className="ccontent__createarticle__label">
            <p>content = </p>
            <input
              onChange={this.handleInputChange}
              className="content__createarticle__input"
              name="body"
              value={body}
              required
            />
          </label>

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
        </form>
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
    const { article } = this.state;
    api.postArticle(article).then((article) => {
      this.setState((currentState) => {
        return {
          postedArticle: article,
          article: { ...currentState.article, title: "", body: "", topic: "" },
        };
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
