import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class LoggedIn extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.fetchUsers();
  };

  render() {
    const { user, handleUserChange } = this.props;
    const { users } = this.state;
    const { username } = user;
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
  }

  fetchUsers = () => {
    api.getUsers().then((users) => {
      this.setState({ users });
    });
  };
}

export default LoggedIn;
