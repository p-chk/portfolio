import React, { Component } from "react";
import "./ProductComponent.css";
import { hideAllAccordion } from "./CommonFunction";

export class ProductComponent extends Component {
  render() {
    return (
      <div
        className="product-co"
        data-toggle="collapse"
        href={"#description" + this.props.num}
        data-parent="#accordion"
        onClick={hideAllAccordion}
      >
        <div className="product-co-browser">
          <div className="product-co-circle"></div>
          <div className="product-co-circle"></div>
          <div className="product-co-circle"></div>
        </div>
          <div className="product-co-header">
            {this.props.productName}
          </div>
        <img
          className="product-co-trial"
          src={this.props.img}
          alt={this.props.link}
        />
      </div>
    );
  }
}

export default ProductComponent;
