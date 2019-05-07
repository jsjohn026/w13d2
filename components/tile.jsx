import React from "react";

class Tile extends React.Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    const tile = this.props.tile;
    let klass;
    let content;
 
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        content = "\ud83d\udca3"; 
      } else {
        klass = 'explored';
        let count = tile.adjacentBombCount();
        content = (count > 0 ? count : '');
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      content = "\ud83d\udea9";
    } else {
      klass = 'unexplored';
    }

    return (
      <div className={`${klass} tile`} onClick={(e) => this.props.updateGame(tile, e.altKey)}>
        {content}
      </div>
    )
  }
}

export default Tile;