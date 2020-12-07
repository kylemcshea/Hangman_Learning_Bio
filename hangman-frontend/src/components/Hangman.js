import React from "react";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
import "../style/hangman.css";
import { randomWord } from "./Words";
import WinLossModal from "./WinLossModal";
import Difficulty from "./Difficulty";

class Hangman extends React.Component {
  constructor(props) {
    super();
    const rand = Math.floor(Math.random() * Math.floor(2)) + 1;
    let info = randomWord();
    this.state = {
      stage: 0,
      guessed: new Set([]),
      picVal: rand,
      maxWrong: 6,
      answer: info.Vocabulary.toUpperCase(),
      definition: info.Definition,
    };
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      maxWrong: value,
    });
  };

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
    return this.state.answer.split("").map((char) => {
      if (this.state.guessed.has(char)) {
        return char;
      } else if (char === " ") {
        return " ";
      } else {
        return "_ ";
      }
    });
  }
  generateButtons() {
    let stringAns = this.guessedWord().reduce((word, letter) => word + letter);
    const gameOver = this.state.stage >= this.state.maxWrong;
    const gameWin = stringAns === this.state.answer;
    return (
      <div className="buttonContainer">
        <div className="alphaBox1">
          {alphabet.slice(0, 13).map((char, key) => (
            <Button
              key={key}
              onClick={() => this.handleClick(char.toUpperCase())}
              disabled={
                this.state.guessed.has(char.toUpperCase()) ||
                gameOver ||
                gameWin
              }
              className="buttonGroup"
              variant="contained"
              color="primary"
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
              disabled={
                this.state.guessed.has(char.toUpperCase()) ||
                gameOver ||
                gameWin
              }
              className="buttonGroup"
              variant="contained"
              color="primary"
            >
              {char.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    );
  }
  render() {
    console.log(this.state.answer);
    //Buttons for game
    let gameKeys = this.generateButtons();
    //Difficulty Radio Buttons
    const gameOver = this.state.stage >= this.state.maxWrong;
    //String version of the display answer so we can compare to real answer
    let stringAns = this.guessedWord().reduce((word, letter) => word + letter);

    const gameWin = stringAns === this.state.answer;
    return (
      <div className="hangman-root">
        <Difficulty updateState={this.handleChange} />
        <img
          className="image-box"
          alt={`hangman_${this.state.stage}`}
          src={
            process.env.PUBLIC_URL +
            `/assets/${this.state.picVal}_hangman_step_${
              (12 / this.state.maxWrong) * this.state.stage
            }.png`
          }
        ></img>
        <div className="hangman-info">
          <p>{this.state.definition}</p>
          <pre>{!gameOver ? stringAns : this.state.answer}</pre>
          {gameWin && <WinLossModal victory={true} />}
          {gameOver && <WinLossModal victory={false} />}
        </div>
        {gameKeys}
      </div>
    );
  }
}
export default Hangman;
