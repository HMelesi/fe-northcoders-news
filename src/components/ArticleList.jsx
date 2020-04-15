import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import { Link } from "@reach/router";
import ArticleSort from "./ArticleSort";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    p: 1,
    limit: 10,
  };

  componentDidMount = () => {
    const { topic } = this.props;
    const { sort_by, order, limit, p } = this.state;
    this.fetchArticles(topic, sort_by, order, limit, p);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic || this.state.p !== prevState.p) {
      console.log("in here");
      const { topic } = this.props;
      const { sort_by, order, limit, p } = this.state;
      this.fetchArticles(topic, sort_by, order, limit, p);
    }
  };

  render() {
    const { articles, isLoading, sort_by, order, p } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="content__container">
        <ArticleSort
          sort_by={sort_by}
          order={order}
          handleInputChange={this.handleInputChange}
          handleInputSubmit={this.handleInputSubmit}
        />
        <ul className="content__articlelist">
          {articles.map((article) => {
            const { title, votes, comment_count, article_id } = article;
            return (
              <Link
                to={`/articles/${article_id}`}
                key={article_id}
                className="link__white"
              >
                <li className="content__article__title">
                  <h3 className="content__article__title__name">{title}</h3>
                  <p className="content__article__title__stats">
                    &#123; votes: {votes}, comments: {comment_count} &#125;
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
        <section className="content__pages">
          <h4>page {p}</h4>
          <button
            onClick={() => {
              this.handleButtonClick(-1);
            }}
            disabled={p < 2}
          >
            ←
          </button>
          <button
            onClick={() => {
              this.handleButtonClick(1);
            }}
            disabled={articles.length === 0}
          >
            →
          </button>
        </section>
      </div>
    );
  }

  fetchArticles = (topic, sort_by, order, limit, p) => {
    api.getArticles(topic, sort_by, order, limit, p).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleInputSubmit = (event) => {
    event.preventDefault();
    const { topic } = this.props;
    const { sort_by, order, limit, p } = this.state;
    this.fetchArticles(topic, sort_by, order, limit, p);
    this.setState({ p: 1 });
  };

  handleButtonClick = (num) => {
    this.setState(({ p }) => {
      return { p: p + num };
    });
  };
}

export default ArticleList;
