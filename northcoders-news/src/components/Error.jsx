import React from "react";

const Error = () => {
  return (
    <div className="content__container">
      <h2 className="content__error__text">
        &lt; the page you're looking for does not exist /&gt;
      </h2>
      <h4 className="content__error__text">&#123; error: 404 &#125;</h4>
    </div>
  );
};

export default Error;
