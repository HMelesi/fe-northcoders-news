import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import ArticleSort from "./ArticleSort";
import Error from "../components/Error";
import ArticleTitleLink from "./ArticleTitleLink";

class ArticleList extends Component {
  state = {
    articles: [],
    totalArticles: 0,
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    p: 1,
    limit: 10,
    error: null,
  };

  componentDidMount = () => {
    const { topic, author } = this.props;
    const { sort_by, order, limit, p } = this.state;
    this.fetchArticles(topic, author, sort_by, order, limit, p);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      const { topic, author } = this.props;
      const { sort_by, order, limit } = this.state;
      this.setState({ p: 1 });
      this.fetchArticles(topic, author, sort_by, order, limit, 1);
    } else if (this.state.p !== prevState.p) {
      const { topic, author } = this.props;
      const { sort_by, order, limit, p } = this.state;
      this.fetchArticles(topic, author, sort_by, order, limit, p);
    }
  };

  render() {
    const {
      articles,
      total_count,
      isLoading,
      sort_by,
      order,
      limit,
      p,
      error,
    } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      const { status, msg } = this.state.error;
      return <Error status={status} msg={msg} />;
    }
    return (
      <div className="content__container">
        <section className="content__title__section">
          <ArticleSort
            sort_by={sort_by}
            order={order}
            handleInputChange={this.handleInputChange}
            handleInputSubmit={this.handleInputSubmit}
          />
        </section>
        <ul className="content__articlelist">
          {articles.map((article) => {
            const { title, votes, comment_count, article_id } = article;
            return (
              <ArticleTitleLink
                article_id={article_id}
                comment_count={comment_count}
                title={title}
                votes={votes}
                key={article_id}
              />
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
            disabled={p * limit >= total_count}
          >
            →
          </button>
        </section>
      </div>
    );
  }

  fetchArticles = (topic, author, sort_by, order, limit, p) => {
    api
      .getArticles(topic, author, sort_by, order, limit, p)
      .then(({ articles, total_count }) => {
        this.setState({ articles, isLoading: false, total_count });
      })
      .catch(({ response }) => {
        const { status, data } = response;
        this.setState({
          error: { status: status, msg: data.message },
          isLoading: false,
        });
      });
  };

  handleInputChange = (event) => {
    const lookup = {
      "newest first": { sort_by: "created_at", order: "desc" },
      "oldest first": { sort_by: "created_at", order: "asc" },
      "most comments": { sort_by: "comment_count", order: "desc" },
      "least comments": { sort_by: "comment_count", order: "asc" },
      "most votes": { sort_by: "votes", order: "desc" },
      "least votes": { sort_by: "votes", order: "asc" },
    };
    const { value } = event.target;
    const { sort_by, order } = lookup[value];
    this.setState({ sort_by, order });

    const { topic, author } = this.props;
    const { limit, p } = this.state;
    this.fetchArticles(topic, author, sort_by, order, limit, p);
    this.setState({ p: 1 });
  };

  handleButtonClick = (num) => {
    this.setState(({ p }) => {
      return { p: p + num };
    });
  };
}

export default ArticleList;
