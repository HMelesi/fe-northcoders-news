import React from "react";

const ArticleSort = (props) => {
  const { handleInputChange } = props;

  return (
    <div>
      <form>
        <label>
          sort by:
          <select className="content__select" onChange={handleInputChange}>
            <option value="newest first">newest first</option>
            <option value="oldest first">oldest first</option>
            <option value="most comments">most comments</option>
            <option value="least comments">least comments</option>
            <option value="most votes">most votes</option>
            <option value="least votes">least votes</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default ArticleSort;
