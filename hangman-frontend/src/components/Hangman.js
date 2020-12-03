import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
import "../style/hangman.css";

class Hangman extends React.Component {
  static defaultProps = {
    maxWrong: 6,
  };

  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      guessed: new Set([]),
      answer: "YEET",
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
  handleClick = (e) => {
    let letter = e.target.value;
    this.setState((prevState) => {
      return {
        guessed: prevState.guessed.add(letter),
        stage: prevState.stage + (prevState.answer.includes(letter) ? 0 : 1),
      };
    });
  };
  //   handleClick = (choice) => {
  //     let tempAnswer = this.state.answer;
  //     let choiceChar = choice.target.innerHTML;
  //     if (tempAnswer.includes(choiceChar)) {
  //       this.setState((prevState) => {
  //         return { trueGuess: prevState.trueGuess.concat(choiceChar) };
  //       });
  //     } else {
  //       this.setState((prevState) => {
  //         return {
  //           falseGuess: prevState.falseGuess.concat(choiceChar),
  //           stage: prevState.stage + 1,
  //         };
  //       });
  //     }
  //     // current stage of hangman
  //     console.log(this.state.stage);
  //     //letter clicked
  //     console.log(choice.target.innerHTML);
  //     //correct answer array
  //     console.log(this.state.trueGuess);
  //     //false answer array
  //     console.log(this.state.falseGuess);
  //   };
  guessedWord() {
    return this.state.answer
      .split("")
      .map((char) => (this.state.guessed.has(char) ? char : " _ "));
  }
  generateButtons() {
    return (
      <div className="buttonContainer">
        <div className="alphaBox1">
          {alphabet.slice(0, 13).map((char, key) => (
            <Button
              key={key}
              onClick={this.handleClick}
              disabled={this.state.guessed.has(char)}
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
              onClick={this.handleClick}
              disabled={this.state.guessed.has(char)}
              className="buttonGroup"
              variant="contained"
              color="secondary"
            >
              {char.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    );
  }
  render() {
    console.log(this.state.displayAnswer);
    let gameKeys = this.generateButtons();
    const gameOver = this.state.stage >= this.props.maxWrong;
    return (
      <div>
        <img
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
          }
        ></img>
        <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
        {gameKeys}
      </div>
    );
  }
}
export default Hangman;
