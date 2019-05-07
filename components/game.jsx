import * as Minesweeper from "../minesweeper";
import React from "react";
import Board from "./board";
import Tile from "./tile";

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = {board: board};
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  restartGame() {
    const board = new Minesweeper.Board(9, 10);
    this.setState({board: board});
  }

  render() {
    let gameOver = false;
    let message;
    let endMessage;
    if (this.state.board.won()) {
      message =  'You Won!';
      gameOver = true;
    } else if (this.state.board.lost()) {
      message = 'You Lost!'
      gameOver = true;
    }
    if (gameOver) {
      endMessage = 
<div>
<section id="modal" className="modal is-active">
  <article className="modal-content">
    <span className="modal-close js-hide-modal">&times;</span>

    <h1>{message}</h1>
      <button onClick={this.restartGame}>Play Again</button>
  </article>
  <div className="modal-screen js-hide-modal"></div>
</section>
</div>
    }

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        {message}
        {endMessage}
      </div>
    );
  }
}

export default Game;