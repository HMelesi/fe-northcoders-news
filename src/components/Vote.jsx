import React, { Component } from "react";
import * as api from "../utils/api";

class Vote extends Component {
  state = {
    optimisticVotes: 0,
  };

  render() {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <div>
        <h4>&#123; votes: {votes + optimisticVotes} &#125;</h4>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={optimisticVotes > 0}
        >
          votes + +
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={optimisticVotes < 0}
        >
          votes - -
        </button>
      </div>
    );
  }

  handleClick = (votes) => {
    const { id } = this.props;
    const voteObj = { inc_votes: votes };
    api.patchVote("article", id, voteObj);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + votes };
    });
  };
}

export default Vote;
