import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import AddComment from "./AddComment";
import { convertDate } from "../utils/utils";
import Vote from "./Vote";
import Error from "../components/Error";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    optimisticComments: 0,
    limit: 10,
    p: 1,
    error: null,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.p !== prevState.p) {
      this.fetchComments();
    }
  };

  render() {
    const { comments, isLoading, optimisticComments, p, error } = this.state;
    const { comment_count } = this.props;
    const { username } = this.props.user;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      const { status, msg } = this.state.error;
      return <Error status={status} msg={msg} />;
    }
    return (
      <div className="content__comments">
        <p className="content__comments__title">
          &#123; comments: {+comment_count + optimisticComments} &#125;
        </p>
        <ul className="content__comments__list">
          {comments.map((comment) => {
            const { author, votes, created_at, body, comment_id } = comment;
            return (
              <li className="content__comments__list__comment" key={comment_id}>
                <h3>&lt; {author} /&gt;</h3>
                <h4>{convertDate(created_at)}</h4>

                {username === author ? (
                  <>
                    <button onClick={this.handleDeleteClick} value={comment_id}>
                      delete comment
                    </button>
                  </>
                ) : (
                  <Vote votes={votes} id={comment_id} />
                )}

                <p>{body}</p>
              </li>
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
            disabled={comments.length === 0}
          >
            →
          </button>
        </section>
        <AddComment user={this.props.user} addNewComment={this.addNewComment} />
      </div>
    );
  }

  fetchComments = () => {
    const { article_id } = this.props;
    const { limit, p } = this.state;
    api
      .getArticleComments(article_id, limit, p)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response }) => {
        const { status, data } = response;
        this.setState({
          error: { status: status, msg: data.message },
          isLoading: false,
        });
      });
  };

  addNewComment = (comment) => {
    const { article_id } = this.props;
    api.postArticleComment(article_id, comment).then((comment) => {
      this.setState(({ comments, optimisticComments }) => {
        return {
          comments: [comment, ...comments],
          optimisticComments: optimisticComments + 1,
        };
      });
    });
  };

  handleDeleteClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    api.deleteComment(value).then(() => {
      this.setState(({ comments, optimisticComments }) => {
        const deletedId = Number.parseInt(value);
        const remainingComments = comments.filter(
          (comment) => comment.comment_id !== deletedId
        );
        return {
          comments: remainingComments,
          optimisticComments: optimisticComments - 1,
        };
      });
    });
  };
  handleButtonClick = (num) => {
    this.setState(({ p }) => {
      return { p: p + num };
    });
  };
}

export default Comments;
