import React from "react";

const LoggedIn = ({ user }) => {
  const { username } = user;
  return (
    <div className="loggedin">
      <p>&#123; logged in as: '{username}' &#125;</p>
    </div>
  );
};

export default LoggedIn;
