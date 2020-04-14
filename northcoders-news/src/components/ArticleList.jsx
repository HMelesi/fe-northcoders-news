import React, { Component } from "react";
import Collapsible from "react-collapsible";
import ArticleTitle from "./ArticleTitle";

class ArticleList extends Component {
  render() {
    return (
      <div className="content__container">
        <h2 className="content__title">&lt;all articles /&gt;</h2>
        <ul className="content__articlelist">
          <li className="content__article__title">
            <h3>first article title</h3>
            <p>&#123; votes: 18, comments: 3 &#125;</p>
          </li>
          <li className="content__article__title">
            <h3>second article title</h3>
            <p>&#123; votes: 18, comments: 3 &#125;</p>
          </li>
          <li className="content__article__title">
            <h3>third article title</h3>
            <p>&#123; votes: 18, comments: 3 &#125;</p>
          </li>
          <li>
            <Collapsible trigger={<ArticleTitle />}>
              <div className="content__article__body">
                <p>
                  Vivamus id dolor vitae ipsum faucibus mattis vel ac lorem.
                  Integer lectus felis, pretium ut lacinia eget, volutpat nec
                  turpis. Duis erat erat, elementum finibus iaculis sed, aliquam
                  non quam. Morbi sit amet felis augue. Mauris vel accumsan
                  elit. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec vitae magna in justo
                  maximus sodales a in erat. Nam dictum orci et justo vehicula
                  viverra. Curabitur condimentum porta sem, non egestas nisl
                  condimentum non. Suspendisse potenti. Cras pharetra elementum
                  elit, ut molestie velit vestibulum sed. Ut congue eros mattis,
                  congue orci id, porta ex.
                </p>
                <button>readMore = () =></button>{" "}
                {/*this could be a link instead*/}
              </div>
            </Collapsible>
          </li>
          <li className="content__article__title">
            <h3>fifth article title</h3>
            <p>&#123; votes: 18, comments: 3 &#125;</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ArticleList;
