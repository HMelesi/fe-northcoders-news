import React from "react";
import { Link } from "@reach/router";

const HeaderText = () => {
  return (
    <div className="header__text">
      <Link className="link__black" to="/">
        <h1>&lt; northcoders news /&gt;</h1>
      </Link>
    </div>
  );
};

export default HeaderText;
