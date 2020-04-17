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
      <div>
        <h3>&lt; add a comment /&gt;</h3>
        <h4>comment = &#123;</h4>
        <form onSubmit={this.handleSubmit}>
          <label className="content__comments__commentlabel">
            <p>username: </p>
            <p className="content__comments__commentinput">{username}</p>
          </label>
          <label className="content__comments__commentlabel">
            <p>comment: </p>
            <input
              onChange={this.handleInputChange}
              className="content__comments__commentinput"
              value={body}
              required
            />
          </label>
          <h4>&#125;</h4>
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
        </form>
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
