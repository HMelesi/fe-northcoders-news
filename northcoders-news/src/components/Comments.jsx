import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    this.fetchComments(article_id);
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="content__comments">
        <p className="content__comments__title">
          &#123; comments: {comments.length} &#125;
        </p>
        <ul className="content__comments__list">
          {comments.map((comment) => {
            const { author, votes, created_at, body, comment_id } = comment;
            return (
              <li className="content__comments__list__comment" key={comment_id}>
                <h3>&lt; {author} /&gt;</h3>
                <h4>{created_at}</h4>
                <h4>&#123; votes: {votes} &#125;</h4>
                <button>votes + +</button>
                <button>votes - - </button>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
        <section>
          <h3>&lt; add a comment /&gt;</h3>
          <h4>comment = &#123;</h4>
          <form>
            <label className="content__comments__commentlabel">
              <p>username: </p>
              <input className="content__comments__commentinput" />
            </label>
            <label className="content__comments__commentlabel">
              <p>comment: </p>
              <input className="content__comments__commentinput" />
            </label>
          </form>
          <h4>&#125;</h4>
        </section>
      </div>
    );
  }

  fetchComments = (article_id) => {
    api.getArticleComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default Comments;
