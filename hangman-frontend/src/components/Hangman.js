import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
import "../style/hangman.css";
import { randomWord } from "./Words";
import WinLossModal from "./WinLossModal";

class Hangman extends React.Component {
  static defaultProps = {
    maxWrong: 6,
  };

  constructor(props) {
    super(props);
    let info = randomWord();
    this.state = {
      stage: 0,
      guessed: new Set([]),
      answer: info.Vocabulary.toUpperCase(),
      definition: info.Definition,
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
              onClick={() => this.handleClick(char.toUpperCase())}
              disabled={this.state.guessed.has(char.toUpperCase())}
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
              onClick={() => this.handleClick(char.toUpperCase())}
              disabled={this.state.guessed.has(char.toUpperCase())}
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
          className="image-box"
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
          }
        ></img>
        <div className="hangman-info">
          <p>{this.state.definition}</p>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          <p>
            {gameWin ? <WinLossModal /> : gameOver ? <p>You Lose!</p> : <p></p>}
          </p>
        </div>
        {gameKeys}
      </div>
    );
  }
}
export default Hangman;
