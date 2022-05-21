import React, { Component } from "react";
import "./DetailComponent.css";

export class DetailComponent extends Component {
  render() {
    return (
      <div className="detail-co panel-collapse collapse" id={"description" + this.props.num}>
        <div className="detail-co-box">
          <div className="detail-co-detail-box">
            <div className="detail-co-pr">Name: {this.props.productName}</div>
            <div className="detail-co-kind">Kind: {this.props.kind}</div>
            <div className="detail-co-description">
              <div className="detail-co-summary">Summary</div>{" "}
              <div className="detail-co-description-wrapper">
                {" "}
                {this.props.detail}
              </div>
              {this.props.link ? <a href={this.props.link} target="_blank" rel="noreferrer"><div className="btn detail-co-link-btn" ><i className="fa-solid fa-book fa-2x detail-btn"></i></div></a> : null}
              {this.props.githubLink ? <a href={this.props.githubLink} target="_blank" rel="noreferrer"><div className="btn detail-co-link-btn" ><i className="fa fa-github-square fa-2x detail-btn"></i></div></a> : null}
            </div>
          </div>
          <div className="detail-co-techstack">
            <div className="detail-co-feature">
                <div className="detail-co-feat-topic">Main Feature</div>
                <div className="detail-co-fl">
                {this.props.mainFeatures.map((main) => (
                    <div className="detail-co-feat-name">{main}</div>
                ))}
                </div>
            </div>
            <div className="detail-co-techstack-img">
                <div className="detail-co-techstack-topic">Techical Stack</div>
                <div className="detail-co-tl">
                {this.props.ts.map((stack) => (
                    <div className="detail-co-techstack-name">{stack}</div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;
