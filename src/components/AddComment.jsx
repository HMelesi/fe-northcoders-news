import React, { useState } from "react";

const AddComment = ({ user, addNewComment }) => {
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });
  const { username } = user;
  const { body } = comment;

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(comment);
    setComment({ username: "", body: "" });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setComment({ username, body: value });
  };

  const resetForm = () => {
    setComment({ username, body: "" });
  };

  return (
    <div className="content__container">
      <h3>&lt; add a comment /&gt;</h3>
      <div className="content__form">
        <form onSubmit={handleSubmit} id="comment_form">
          <label className="content__form__label">
            <p>username: </p>
            <p className="content__form__input">{username}</p>
          </label>
          <label className="content__form__label">
            <p>comment: </p>
            <textarea
              name="body"
              form="comment_form"
              onChange={handleInputChange}
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
              onClick={resetForm}
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
};

export default AddComment;
