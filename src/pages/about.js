import React, { Component, Fragment } from "react";

import ProductHero from "../templates/views/ProductHero";
import ProductValues from "../templates/views/ProductValues";

export class about extends Component {
  render() {
    return (
      <div style={{ margin: "0px", height: "100%", width: "100%" }}>
        <Fragment>
          <ProductHero />
          <ProductValues />
        </Fragment>
      </div>
    );
  }
}

export default about;
