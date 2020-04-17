import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <h2 className="content__articlelist__title">&lt; loading... /&gt;</h2>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
