import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
import "../style/hangman.css";

class Hangman extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stage: 0,
      trueGuess: [],
      falseGuess: [],
      answer: "YEET",
      displayAnswer: "",
    };
  }
  componentDidMount() {
    let tempAnswer = this.state.answer;
    let displayAns = tempAnswer.split("").map(() => {
      return "_";
    });
    this.setState = {
      displayAnswer: displayAns,
    };
  }
  renderAnswer = () => {
    let tempAnswer = this.state.answer;
    let displayAnswer = tempAnswer.split("").map((char, key) => {
      this.state.trueGuess.includes(char)
        ? (tempAnswer[key] = char)
        : (tempAnswer[key] = "_");
    });
    return displayAnswer;
  };
  handleClick = (choice) => {
    let tempAnswer = this.state.answer;
    let choiceChar = choice.target.innerHTML;
    if (tempAnswer.includes(choiceChar)) {
      this.setState((prevState) => {
        return { trueGuess: prevState.trueGuess.concat(choiceChar) };
      });
    } else {
      this.setState((prevState) => {
        return {
          falseGuess: prevState.falseGuess.concat(choiceChar),
          stage: prevState.stage + 1,
        };
      });
    }
    // current stage of hangman
    console.log(this.state.stage);
    //letter clicked
    console.log(choice.target.innerHTML);
    //correct answer array
    console.log(this.state.trueGuess);
    //false answer array
    console.log(this.state.falseGuess);
  };
  render() {
    console.log(this.state.displayAnswer);
    return (
      <div>
        <img
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
          }
        ></img>
        <p>{this.state.displayAnswer}</p>

        <div className="buttonContainer">
          <div className="alphaBox1">
            {alphabet.slice(0, 13).map((char, key) => (
              <Button
                key={key}
                onClick={(char) => this.handleClick(char)}
                className="buttonGroup"
                variant="contained"
                color="secondary"
              >
                {char.toUpperCase()}
              </Button>
            ))}
            <br />
          </div>
          <div className="alphaBox2">
            {alphabet.slice(13, 26).map((char, key) => (
              <Button
                key={key}
                onClick={(char) => this.handleClick(char)}
                className="buttonGroup"
                variant="contained"
                color="secondary"
              >
                {char.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Hangman;
