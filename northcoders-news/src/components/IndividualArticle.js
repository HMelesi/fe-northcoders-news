import React, { Component } from "react";
import Comments from "./Comments";

class IndividualArticle extends Component {
  render() {
    return (
      <div className="content__container">
        <h3>&lt; the topic /&gt;</h3>
        <h2>&lt; an individual article /&gt;</h2>
        <h4>&#123; votes: 18, comments: 3 &#125;</h4>
        <button>votes + +</button>
        <button>votes - - </button>
        <p className="content__article__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit sapien ac sodales mollis. Vestibulum metus turpis, sodales
          nec erat et, eleifend luctus nulla. Etiam efficitur at sem ac
          interdum. Nunc aliquet posuere mauris. Morbi nisl nisi, finibus
          sollicitudin vestibulum vel, auctor ut quam. Phasellus ac justo
          laoreet, hendrerit elit tempus, interdum erat. Proin sodales magna ut
          venenatis tincidunt. Nulla interdum ex eget risus venenatis accumsan.
          Curabitur semper arcu ac viverra imperdiet. Quisque non tempus elit.
          Nulla ullamcorper aliquet mauris, non rhoncus enim malesuada quis.
          Fusce placerat nulla nunc, ac hendrerit risus dapibus a. Pellentesque
          non purus in felis blandit fermentum. Duis sit amet urna nec tellus
          interdum tempor. Maecenas faucibus est non vulputate dictum. Praesent
          egestas venenatis purus vel aliquet. Vestibulum lorem mi, ultricies a
          fermentum sit amet, feugiat non lorem. Quisque sollicitudin ipsum sit
          amet blandit mattis. Nullam ullamcorper mauris nec metus dignissim, ac
          luctus dolor vehicula. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nulla neque nunc, posuere
          sed interdum non, posuere sit amet ante. Mauris vel varius elit, sed
          fringilla nisl. Quisque scelerisque libero sit amet iaculis malesuada.
          Donec accumsan semper mauris vitae aliquam. Cras condimentum elit ac
          mi blandit, nec luctus justo iaculis. Quisque vitae viverra mauris.
          Aliquam ultrices dui nulla. Vivamus id dolor vitae ipsum faucibus
          mattis vel ac lorem. Integer lectus felis, pretium ut lacinia eget,
          volutpat nec turpis. Duis erat erat, elementum finibus iaculis sed,
          aliquam non quam. Morbi sit amet felis augue. Mauris vel accumsan
          elit. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec vitae magna in justo maximus sodales a
          in erat. Nam dictum orci et justo vehicula viverra. Curabitur
          condimentum porta sem, non egestas nisl condimentum non. Suspendisse
          potenti. Cras pharetra elementum elit, ut molestie velit vestibulum
          sed. Ut congue eros mattis, congue orci id, porta ex.
        </p>
        <Comments />
      </div>
    );
  }
}

export default IndividualArticle;
