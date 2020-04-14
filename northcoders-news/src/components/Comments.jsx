import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    const { comments, isLoading } = this.state;
    const { comment_count } = this.props;
    const { username } = this.props.user;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="content__comments">
        <p className="content__comments__title">
          &#123; comments: {comment_count} &#125;
        </p>
        <ul className="content__comments__list">
          {comments.map((comment) => {
            const { author, votes, created_at, body, comment_id } = comment;
            return (
              <li className="content__comments__list__comment" key={comment_id}>
                <h3>&lt; {author} /&gt;</h3>
                <h4>{created_at}</h4>
                <h4>&#123; votes: {votes} &#125;</h4>
                {username === author ? (
                  <>
                    <button onClick={this.handleDeleteClick} value={comment_id}>
                      delete comment
                    </button>
                  </>
                ) : (
                  <>
                    <button>votes + +</button>
                    <button>votes - - </button>
                  </>
                )}

                <p>{body}</p>
              </li>
            );
          })}
        </ul>
        <AddComment user={this.props.user} addNewComment={this.addNewComment} />
      </div>
    );
  }

  fetchComments = () => {
    const { article_id } = this.props;
    api.getArticleComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  addNewComment = (comment) => {
    const { article_id } = this.props;
    api.postArticleComment(article_id, comment).then((comment) => {
      this.setState(({ comments }) => {
        return { comments: [comment, ...comments] };
      });
    });
  };

  handleDeleteClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    api.deleteComment(value).then(() => {
      this.setState(({ comments }) => {
        const deletedId = Number.parseInt(value);
        const remainingComments = comments.filter(
          (comment) => comment.comment_id !== deletedId
        );
        return { comments: remainingComments };
      });
    });
  };
}

export default Comments;
