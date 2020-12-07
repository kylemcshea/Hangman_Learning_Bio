import React from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import alphabet from "../static/alphabet";
import "../style/hangman.css";
import { randomWord } from "./Words";
import WinLossModal from "./WinLossModal";

class Hangman extends React.Component {
  handleChange = (event) => {
    const max = Number(event.target.value);
    this.setState({
      maxWrong: max,
    });
  };

  constructor(props) {
    super();
    let info = randomWord();
    this.state = {
      stage: 0,
      guessed: new Set([]),
      maxWrong: 6,
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
    return this.state.answer.split("").map((char) => {
      if (this.state.guessed.has(char)) {
        return char;
      } else if (char === " ") {
        return "  ";
      } else {
        return "_ ";
      }
    });
  }
  generateDifficultyRadios() {
    return (
      <div className="difficultyContainer">
        <FormControl component="fieldset">
          <h3>Difficulty</h3>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="12"
              control={
                <Radio checked={this.state.maxWrong === 12} color="secondary" />
              }
              label="Easy"
              labelPlacement="top"
            />
            <FormControlLabel
              value="6"
              control={
                <Radio checked={this.state.maxWrong === 6} color="secondary" />
              }
              label="Medium"
              labelPlacement="top"
            />
            <FormControlLabel
              value="3"
              control={
                <Radio checked={this.state.maxWrong === 3} color="secondary" />
              }
              label="Hard"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
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
    //Difficulty Radio Buttons
    let difficultSelection = this.generateDifficultyRadios();
    const gameOver = this.state.stage >= this.state.maxWrong;
    //String version of the display answer so we can compare to real answer
    let stringAns = this.guessedWord().reduce((word, letter) => word + letter);

    const gameWin = stringAns === this.state.answer;
    return (
      <div className="hangman-root">
        {this.state.guessed.size === 0 && difficultSelection}
        <img
          className="image-box"
          alt={`hangman_${this.state.stage}`}
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
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
