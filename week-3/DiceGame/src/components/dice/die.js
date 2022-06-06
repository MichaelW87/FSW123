import React from "react";
import "./die.style.css";

class Die extends React.Component {
  render() {
    return (
      <div> 
      <img src={this.props.face} alt=""/>
        <i
          className={`die fas fa-dice-${this.props.face} ${
            this.props.rolling && "animation"
          }`}></i>
      </div>
    );
  }
}

export default Die;