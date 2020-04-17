import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: {
      username: "",
      body: "",
    },
  };

  render() {
    const { username } = this.props.user;
    const { body } = this.state.comment;
    return (
      <div className="content__container">
        <h3>&lt; add a comment /&gt;</h3>
        <div className="content__form">
          <form onSubmit={this.handleSubmit} id="comment_form">
            <label className="content__form__label">
              <p>username: </p>
              <p className="content__form__input">{username}</p>
            </label>
            <label className="content__form__label">
              <p>comment: </p>
              <textarea
                name="body"
                form="comment_form"
                onChange={this.handleInputChange}
                value={body}
                required
                className="content__form__input"
                rows="15"
              ></textarea>
            </label>

            <div className="form__buttons">
              <button type="submit" className="button__link__red">
                submit comment
              </button>
              <button
                onClick={this.resetForm}
                type="reset"
                className="button__link__red"
              >
                clear fields
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { comment } = this.state;
    const { addNewComment } = this.props;
    addNewComment(comment);
    this.setState({ comment: { username: "", body: "" } });
  };

  handleInputChange = (event) => {
    const { username } = this.props.user;
    const { value } = event.target;
    this.setState({ comment: { username, body: value } });
  };

  resetForm = () => {
    this.setState((currentState) => {
      return {
        comment: { ...currentState.comment, body: "" },
      };
    });
  };
}

export default AddComment;
