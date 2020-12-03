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
  handleClick = (e) => {
    let letter = e;
    console.log(letter);
    this.setState((st) => {
      return {
        guessed: st.guessed.add(letter),
        stage: st.stage + (st.answer.includes(letter) ? 0 : 1),
      };
    });
  };
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
              onClick={(e) => this.handleClick(e.target.innerHTML)}
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
              onClick={(e) => this.handleClick(e.target.innerHTML)}
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
    //Buttons for game
    let gameKeys = this.generateButtons();
    const gameOver = this.state.stage >= this.props.maxWrong;
    //String version of the display answer so we can compare to real answer
    let stringAns = this.guessedWord()
      .join()
      .replace(",", "")
      .replace(/,/g, "");
    const gameWin = stringAns == this.state.answer;
    return (
      <div>
        <img
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
          }
        ></img>
        <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
        <p>{gameWin ? <p>You win!</p> : <p></p>}</p>
        {gameKeys}
      </div>
    );
  }
}
export default Hangman;
