import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Back-End Software Engineer", "Front-End Software Student", "Full-Stack Enthusiast     "];

class ProfileDetailComponents extends Component {
    state = {
        textIndex: 0
      };
    
      componentDidMount() {
        setInterval(() => {
          this.setState({
            textIndex: this.state.textIndex + 1,
          });
        }, 1800);
        setInterval(() => {
            this.setState({
              });
          }, 1);
      };
      render() {
  return (
    <div>
      <React.Fragment>
        <ReactTextTransition
          text={texts[this.state.textIndex % texts.length]}
          delay={this.state.textIndex * 100}
          springConfig={presets.gentle}
          direction="down"
          noOverflow
        />
      </React.Fragment>
    </div>
  );
  }
}

export default ProfileDetailComponents;
