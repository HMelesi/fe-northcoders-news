import React, { Component } from "react";
import Comments from "./Comments";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";
import { convertDate } from "../utils/utils";
import Vote from "./Vote";
import DeletedArticle from "../components/Deleted";
import Error from "../components/Error";

class IndividualArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    deleted: false,
    error: null,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    this.fetchArticle(article_id);
  };

  render() {
    const { username } = this.props.user;
    const { article, isLoading, deleted, error } = this.state;
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
    if (deleted) {
      return <DeletedArticle title={title} topic={topic} />;
    }
    if (error) {
      const { status, msg } = this.state.error;
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
          <h3>&lt; {author} /&gt;</h3>
        </Link>
        <h4>{convertDate(created_at)}</h4>
        {username === author ? (
          <>
            <button onClick={this.handleDeleteClick} value={article_id}>
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
          user={this.props.user}
        />
      </div>
    );
  }

  fetchArticle = (article_id) => {
    api
      .getArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        const { status, data } = response;
        this.setState({
          error: { status: status, msg: data.message },
          isLoading: false,
        });
      });
  };

  handleDeleteClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    api.deleteArticle(value);
    this.setState({ deleted: true });
  };
}

export default IndividualArticle;
