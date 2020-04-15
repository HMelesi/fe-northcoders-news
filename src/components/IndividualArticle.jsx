import React, { Component } from "react";
import Comments from "./Comments";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";
import { convertDate } from "../utils/utils";
import Vote from "./Vote";

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
      created_at,
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
        <h4>{convertDate(created_at)}</h4>

        <Vote votes={votes} id={article_id} />
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
