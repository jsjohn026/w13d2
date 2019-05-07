import React from "react";
import Tile from "./tile";

class Board extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const board = this.props.board
    return (
      <div>{this.renderRows()}</div>
    )
  }

  renderRows() {
    const board = this.props.board
    return board.grid.map((row, i) => {
      return <div className="row" key={`row${i}`}>{this.renderTiles(row, i)}</div>
    })
  }

  renderTiles(row, i) {
    const board = this.props.board
    return row.map((tile, j) => {
      return (
        <Tile tile={tile} 
        updateGame={this.props.updateGame} 
        key={i * 10 + j}/>
      ) 
    })
  }
}

export default Board;