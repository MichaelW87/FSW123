import React from "react";
import "./roll.style.css";
import Die from "../dice/die";
import die1 from "../../diceImage/1.png"
import die2 from "../../diceImage/2.png"
import die3 from "../../diceImage/3.png"
import die4 from "../../diceImage/4.png"
import die5 from "../../diceImage/5.png"
import die6 from "../../diceImage/6.png"

class RollDice extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die1: "one",
    die2: "one",
    rolling: false,
  };

  roll = () => {
    // Get new side for Die 1 & Die 2
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // Set new Dice state
    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 500);
  };

  render() {
    return (
      <div className="roll-dice">
        <div className="dice-container">
          <Die face={
            this.state.die1 === "one" ? die1:
            this.state.die1 === "two" ? die2:
            this.state.die1 === "three" ? die3:
            this.state.die1 === "four" ? die4:
            this.state.die1 === "five" ? die5:
            this.state.die1 === "six" ? die6:
              "error"

          } rolling={this.state.rolling} />
          <Die face={
            this.state.die2 === "one" ? die1:
            this.state.die2 === "two" ? die2:
            this.state.die2 === "three" ? die3:
            this.state.die2 === "four" ? die4:
            this.state.die2 === "five" ? die5:
            this.state.die2 === "six" ? die6:
              "error"
          } rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;