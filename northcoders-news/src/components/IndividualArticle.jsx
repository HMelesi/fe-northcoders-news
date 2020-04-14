import React, { Component } from "react";
import Comments from "./Comments";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";

class IndividualArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    this.fetchArticle(article_id);
  };

  render() {
    const { article, isLoading } = this.state;
    const {
      title,
      body,
      topic,
      author,
      votes,
      comment_count,
      article_id,
    } = article;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="content__container">
        <Link to={`/topics/${topic}`} className="link__black">
          <h3>&lt; {topic} /&gt;</h3>
        </Link>
        <h2 className="content__title">&lt; {title} /&gt;</h2>
        <h3 className="content__title">&lt; {author} /&gt;</h3>
        <h4>
          &#123; votes: {votes}, comments: {comment_count} &#125;
        </h4>
        <button>votes + +</button>
        <button>votes - - </button>
        <p className="content__article__body">{body}</p>
        <Comments
          article_id={article_id}
          comment_count={comment_count}
          user={this.props.user}
        />
      </div>
    );
  }

  fetchArticle = (article_id) => {
    api.getArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default IndividualArticle;
