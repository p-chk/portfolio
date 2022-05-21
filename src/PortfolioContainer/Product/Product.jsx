import React, { Component } from "react";
import ProductComponent from "../../Component/ProductComponent";
import DetailComponent from "../../Component/DetailComponent";
import "./Product.css";
import { hideAllAccordion } from "../../Component/CommonFunction";
import { productList } from "../../productlistdata";

export class Product extends Component {
  render() {
    return (
      <div className="panel-group product-container accordion" id="accordion">
        <div className="p-container-header">
          <h1 className="p-continer-header-title">
            {" "}
            Here's some of my crafts :)
          </h1>
        </div>
        <div className="productDetail">
        {productList.map((product) => (
            <DetailComponent
              key={product.id}
              num={product.id}
              githubLink={product.githubLink}
              kind={product.kind}
              mainFeatures={product.mainFeatures}
              ts={product.ts}
              img={product.img}
              link={product.link}
              productName={product.productName}
              detail={product.detail}
            />
          ))}
        </div>
        <div className="p-list" onClick={hideAllAccordion}>
          {productList.map((product) => (
            <ProductComponent
              key={product.id}
              num={product.id}
              img={product.img}
              productName={product.productName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
