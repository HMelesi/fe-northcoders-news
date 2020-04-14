import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import { Link } from "@reach/router";
// import Collapsible from "react-collapsible";
// import ArticleTitle from "./ArticleTitle";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { topic } = this.props;
    this.fetchArticles(topic);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      const { topic } = this.props;
      this.fetchArticles(topic);
    }
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="content__container">
        <ul className="content__articlelist">
          {articles.map((article) => {
            const { title, votes, comment_count, article_id } = article;
            return (
              <Link to={`/articles/${article_id}`} key={article_id}>
                <li className="content__article__title">
                  <h3>{title}</h3>
                  <p>
                    &#123; votes: {votes}, comments: {comment_count} &#125;
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticles = (topic) => {
    api.getArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticleList;

// {/* <li className="content__article__title">
// <h3>first article title</h3>
// <p>&#123; votes: 18, comments: 3 &#125;</p>
// </li>
// <li className="content__article__title">
// <h3>second article title</h3>
// <p>&#123; votes: 18, comments: 3 &#125;</p>
// </li>
// <li className="content__article__title">
// <h3>third article title</h3>
// <p>&#123; votes: 18, comments: 3 &#125;</p>
// </li>
// <li>
// <Collapsible trigger={<ArticleTitle />}>
//   <div className="content__article__body">
//     <p>
//       Vivamus id dolor vitae ipsum faucibus mattis vel ac lorem.
//       Integer lectus felis, pretium ut lacinia eget, volutpat nec
//       turpis. Duis erat erat, elementum finibus iaculis sed, aliquam
//       non quam. Morbi sit amet felis augue. Mauris vel accumsan
//       elit. Orci varius natoque penatibus et magnis dis parturient
//       montes, nascetur ridiculus mus. Donec vitae magna in justo
//       maximus sodales a in erat. Nam dictum orci et justo vehicula
//       viverra. Curabitur condimentum porta sem, non egestas nisl
//       condimentum non. Suspendisse potenti. Cras pharetra elementum
//       elit, ut molestie velit vestibulum sed. Ut congue eros mattis,
//       congue orci id, porta ex.
//     </p>
//     <button>readMore = () =></button>{" "}
//     {/*this could be a link instead*/}
//   </div>
// </Collapsible>
// </li>
// <li className="content__article__title">
// <h3>fifth article title</h3>
// <p>&#123; votes: 18, comments: 3 &#125;</p>
// </li> */}
