import React from "react";

const ArticleSort = (props) => {
  const { handleInputChange, handleInputSubmit } = props;

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <label>sort by: </label>
        <select
          className="content__select"
          name="sort_by"
          onChange={handleInputChange}
        >
          <option value="created_at">date posted</option>
          <option value="comment_count">article comments</option>
          <option value="votes">article votes</option>
        </select>
        <label> order: </label>
        <select
          className="content__select"
          name="order"
          onChange={handleInputChange}
        >
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
        <button> => click to display articles</button>
      </form>
    </div>
  );
};

export default ArticleSort;
