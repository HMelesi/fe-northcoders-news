import axios from "axios";

const request = axios.create({
  baseURL: "https://hm-nc-news-app.herokuapp.com/api/",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by, order, limit, p) => {
  return request
    .get("/articles", { params: { topic, sort_by, order, limit, p } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const postArticle = (article) => {
  return request.post("articles", article).then(({ data }) => {
    return data.article;
  });
};

export const patchVote = (type, id, votes) => {
  return request.patch(`/${type}s/${id}`, votes).then(({ data }) => {
    return data[type];
  });
};

export const postArticleComment = (article_id, newComment) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const getArticleComments = (article_id, limit, p) => {
  return request
    .get(`/articles/${article_id}/comments`, { params: { limit, p } })
    .then(({ data }) => {
      return data.comments;
    });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`);
};

export const deleteArticle = (article_id) => {
  return request.delete(`/articles/${article_id}`);
};

export const getUsers = () => {
  return request.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const getUser = (username) => {
  return request.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
