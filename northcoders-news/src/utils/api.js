import axios from "axios";

const request = axios.create({
  baseURL: "https://hm-nc-news-app.herokuapp.com/api/",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return request.get("/articles").then(({ data }) => {
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
}; // should it take a topic as an argument, or should the topic be automatically added to the body of the article?

export const patchArticle = (article_id, votes) => {
  return request.patch(`/articles/${article_id}`, votes).then(({ data }) => {
    return data.article;
  });
};

export const postArticleComment = (article_id, newComment) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const getArticleComments = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleComment = (comment_id, votes) => {
  return request.patch(`/comments/${comment_id}`, votes).then(({ data }) => {
    return data.comment;
  });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`);
};
