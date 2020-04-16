import React from "react";

const Error = ({ status, msg }) => {
  return (
    <div className="content__container">
      <h2 className="content__message__text">&lt; oh no /&gt;</h2>
      <h4 className="content__message__text">status: {status}</h4>
      <h4 className="content__message__text">{msg.toLowerCase()}</h4>
    </div>
  );
};

export default Error;
