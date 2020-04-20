import React, { useState, useEffect } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

const LoggedIn = ({ user, handleUserChange }) => {
  const [users, setUsers] = useState([]);
  const { username } = user;

  useEffect(() => {
    api.getUsers().then((users) => {
      setUsers(users);
    }, []);
  });

  return (
    <div className="loggedin">
      <p>&#123; logged in as: '{username}' &#125;</p>
      <label>
        change user:
        <select
          className="content__select"
          name="username"
          onChange={handleUserChange}
        >
          <option value={username}>{username}</option>
          {users.map((user) => {
            if (user.username !== username) {
              return (
                <option value={user.username} key={user.username}>
                  {user.username}
                </option>
              );
            } else {
              return null;
            }
          })}
        </select>
      </label>
      <Link to="/user/createarticle">
        <button className="button__link__red">write an article</button>
      </Link>
    </div>
  );
};

export default LoggedIn;
