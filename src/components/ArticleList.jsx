import React, { useState, useEffect } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import ArticleSort from "./ArticleSort";
import Error from "../components/Error";
import ArticleTitleLink from "./ArticleTitleLink";

const ArticleList = ({ topic, author }) => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [p, setP] = useState(1);
  const [limit] = useState(10);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles(topic, author, sort_by, order, limit, p);
  }, [topic, p, sort_by, author, limit, order]);

  const fetchArticles = (topic, author, sort_by, order, limit, p) => {
    api
      .getArticles(topic, author, sort_by, order, limit, p)
      .then(({ articles, total_count }) => {
        setArticles(articles);
        setLoading(false);
        setTotalArticles(total_count);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status, msg: data.message });
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    const lookup = {
      "newest first": { sort_by: "created_at", order: "desc" },
      "oldest first": { sort_by: "created_at", order: "asc" },
      "most comments": { sort_by: "comment_count", order: "desc" },
      "least comments": { sort_by: "comment_count", order: "asc" },
      "most votes": { sort_by: "votes", order: "desc" },
      "least votes": { sort_by: "votes", order: "asc" },
    };
    const { value } = event.target;
    const { sort_by, order } = lookup[value];
    setSortBy(sort_by);
    setOrder(order);
    setP(1);
  };

  const handleButtonClick = (num) => {
    setP((p) => p + num);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    const { status, msg } = error;
    return <Error status={status} msg={msg} />;
  }
  return (
    <div className="content__container">
      <section className="content__title__section">
        <ArticleSort
          sort_by={sort_by}
          order={order}
          handleInputChange={handleInputChange}
        />
      </section>
      <ul className="content__articlelist">
        {articles.map((article) => {
          const { title, votes, comment_count, article_id } = article;
          return (
            <ArticleTitleLink
              article_id={article_id}
              comment_count={comment_count}
              title={title}
              votes={votes}
              key={article_id}
            />
          );
        })}
      </ul>
      <section className="content__pages">
        <h4>page {p}</h4>
        <button
          onClick={() => {
            handleButtonClick(-1);
          }}
          disabled={p < 2}
        >
          ←
        </button>
        <button
          onClick={() => {
            handleButtonClick(1);
          }}
          disabled={p * limit >= totalArticles}
        >
          →
        </button>
      </section>
    </div>
  );
};

export default ArticleList;
