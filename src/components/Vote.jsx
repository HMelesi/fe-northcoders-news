import React, { useState } from "react";
import * as api from "../utils/api";

const Vote = ({ votes, username, author, id, type }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const handleClick = (votes) => {
    const voteObj = { inc_votes: votes };
    api.patchVote(type, id, voteObj);
    setOptimisticVotes((optimisticVotes) => optimisticVotes + votes);
  };

  return (
    <div className="content__vote">
      <div className="content__vote__buttons">
        <button
          onClick={() => {
            handleClick(1);
          }}
          disabled={optimisticVotes > 0 || username === author}
        >
          ↑
        </button>
        <button
          onClick={() => {
            handleClick(-1);
          }}
          disabled={optimisticVotes < 0 || username === author}
        >
          ↓
        </button>
      </div>
      <h4 className="content__vote__text">
        &#123; votes: {votes + optimisticVotes} &#125;
      </h4>
    </div>
  );
};

export default Vote;
