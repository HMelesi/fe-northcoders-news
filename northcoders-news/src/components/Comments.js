import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div className="content__comments">
        <p className="content__comments__title">&#123; comments: 2 &#125;</p>
        <ul className="content__comments__list">
          <li className="content__comments__list__comment">
            <h3>&lt; title of the comment /&gt;</h3>
            <h4>&#123; votes: 18 &#125;</h4>
            <button>votes + +</button>
            <button>votes - - </button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse suscipit sapien ac sodales mollis. Vestibulum metus
              turpis, sodales nec erat et, eleifend luctus nulla. Etiam
              efficitur at sem ac interdum. Nunc aliquet posuere mauris. Morbi
              nisl nisi, finibus sollicitudin vestibulum vel, auctor ut quam.
              Phasellus ac justo laoreet, hendrerit elit tempus, interdum erat.
              Proin sodales magna ut venenatis tincidunt. Nulla interdum ex eget
              risus venenatis accumsan.
            </p>
          </li>
          <li className="content__comments__list__comment">
            <h3>&lt; title of the next comment /&gt;</h3>
            <h4>&#123; votes: 2 &#125;</h4>
            <button>votes + +</button>
            <button>votes - - </button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse suscipit sapien ac sodales mollis. Vestibulum metus
              turpis, sodales nec erat et, eleifend luctus nulla. Etiam
              efficitur at sem ac interdum.
            </p>
          </li>
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
}

export default Comments;
