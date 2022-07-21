import Square from "./Square";
import React from 'react';

class Board extends React.Component {  //React component
    renderSquare(row,i) {
      const winner = this.props.winner;
      let hasWon;
      if (winner) {
        for(const[key,val] of Object.entries(winner)) {
            if (i == val)  
              hasWon = true;
            }
    }
      return (
        <Square 
          winner = {hasWon}
          row={row}
          col={i}
          value={this.props.squares[i]}
          onClick={ () => this.props.onClick(i) } 
        />
      );
    }

    renderRow(i) {
        const cols = [0,1,2]
        let cells = cols.map( (cell) => this.renderSquare(i,i+cell));
        return (
            <div className="board-row">
                {cells}
            </div>
        );
    }
  
    render() {
      const indexes = [0,3,6];
      let rows = indexes.map( (i) => this.renderRow(i) ) ;
      return (
        <div>
            {rows}
        </div>
      );
    }
  }
  export default Board;
  