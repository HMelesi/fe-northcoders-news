import React, { Component } from "react";

class CreateArticle extends Component {
  state = {
    article: {
      title: "",
      body: "",
      topic: "",
      author: "",
    },
  };

  render() {
    const { username, topics } = this.props.user;
    console.log(topics);
    return (
      <div className="content__container">
        <h3>&lt; submit an article /&gt;</h3>

        <form
          onSubmit={this.handleSubmit}
          className="content__createarticle__form"
        >
          <label className="content__createarticle__label">
            <p>username = </p>
            <p className="content__createarticle__input">{username}</p>
          </label>
          <label className="content__createarticle__label">
            <p>title = </p>
            <input
              onChange={this.handleInputChange}
              className="content__createarticle__input"
              name="title"
            />
          </label>
          <label className="content__createarticle__label">
            <p>topic = </p>
            <input
              onChange={this.handleInputChange}
              className="content__createarticle__input"
              name="topic"
            />
          </label>
          <label className="ccontent__createarticle__label">
            <p>content = </p>
            <input
              onChange={this.handleInputChange}
              className="content__createarticle__input"
              name="body"
            />
          </label>

          <button>post article =></button>
        </form>
      </div>
    );
  }

  //   handleInputChange = (type) => {
  //     this.setState(({ comment }) => {
  //       return (comment[type] = type);
  //     });
  //   };
}

export default CreateArticle;

/*

    const { username } = this.props.user;

{
    title: "test-title",
    body: "test-body",
    topic: "paper",
    author: "butter_bridge"
}
*/
