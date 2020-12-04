import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
// import Radio from "@material-ui/core/Radio";
import alphabet from "../static/alphabet";
import "../style/hangman.css";
import { randomWord } from "./Words";
import WinLossModal from "./WinLossModal";

class Hangman extends React.Component {
  static defaultProps = {
    maxWrong: 6,
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ difficulty: event.target.value });
  };

  constructor(props) {
    super(props);
    let info = randomWord();
    this.state = {
      stage: 0,
      guessed: new Set([]),
      answer: info.Vocabulary.toUpperCase(),
      definition: info.Definition,
      difficulty: "Medium",
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
  generateDifficultyRadios() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Difficulty</FormLabel>
        <RadioGroup row aria-label="position" name="position">
          <FormControlLabel
            control={
              <Radio
                checked={this.state.difficulty === "Easy"}
                onChange={this.handleChange}
                value="Easy"
                color="secondary"
              />
            }
            label="Easy"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Radio
                checked={this.state.difficulty === "Medium"}
                onChange={this.handleChange}
                value="Medium"
                color="secondary"
              />
            }
            label="Medium"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Radio
                checked={this.state.difficulty === "Hard"}
                onChange={this.handleChange}
                value="Hard"
                color="secondary"
              />
            }
            label="Hard"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
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
    const gameOver = this.state.stage >= this.props.maxWrong;
    //String version of the display answer so we can compare to real answer
    let stringAns = this.guessedWord()
      .join()
      .replace(",", "")
      .replace(/,/g, "");
    const gameWin = stringAns === this.state.answer;
    return (
      <div>
        <img
          className="image-box"
          alt={`hangman_${this.state.stage}`}
          src={
            process.env.PUBLIC_URL +
            `/assets/hangman_step_${this.state.stage}.png`
          }
        ></img>
        <div className="hangman-info">
          <div className="radio">{difficultSelection}</div>
          <p>{this.state.definition}</p>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          {gameWin ? (
            <WinLossModal victory={true} />
          ) : gameOver ? (
            <WinLossModal victory={false} />
          ) : (
            <p></p>
          )}
        </div>
        {gameKeys}
      </div>
    );
  }
}
export default Hangman;
