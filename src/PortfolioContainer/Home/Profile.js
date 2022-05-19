import React, { Component } from "react";
import ContactMeComponent from "../../Component/ContactMeComponent";
import ReactTypical from 'react-typical';
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <ContactMeComponent />
              </div>
            </div>
            <div className="profile-details-name">
              {" "}
              <span className="primary-text">It's me!</span>
              <div className="primary-text primary-text-bold"> Fluke, Chayakorn</div>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                {" "}
                  <ReactTypical 
                  loop={Infinity}
                  steps={["Back-End Engineer by ☀️", 2000,
                  "Front-End Student by 🌙", 2000]}/>
                </h1>
                <span className="profile-rol-tagline">
                  Based in BKK, Thailand 🇹🇭
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a
                href="Chayakorn Kaewlaor-resume.pdf"
                download="Chayakorn Kaewlaor-resume.pdf"
              >
                <button className="btn btn-outline-info">
                  {""}
                  Get Resume
                </button>
              </a>
            </div>
          </div>
          <div className="slide"><i className="fa fa-angle-double-down fa-4x slide" aria-hidden="true"></i></div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
