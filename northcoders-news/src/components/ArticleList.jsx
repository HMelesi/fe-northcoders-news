import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import { Link } from "@reach/router";
import ArticleSort from "./ArticleSort";
// import Collapsible from "react-collapsible";
// import ArticleTitle from "./ArticleTitle";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
  };

  componentDidMount = () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    this.fetchArticles(topic, sort_by, order);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      const { topic } = this.props;
      const { sort_by, order } = this.state;
      this.fetchArticles(topic, sort_by, order);
    }
  };

  render() {
    const { articles, isLoading, sort_by, order } = this.state;
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
      </div>
    );
  }

  fetchArticles = (topic, sort_by, order) => {
    api.getArticles(topic, sort_by, order).then((articles) => {
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
    const { sort_by, order } = this.state;
    this.fetchArticles(topic, sort_by, order);
  };
}

export default ArticleList;
