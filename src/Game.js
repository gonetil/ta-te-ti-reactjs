import React, { useEffect, useState, useLayoutEffect }  from 'react';
import Clock from './status/Clock';
import Board from './board/Board';
import GameStatus from './status/GameStatus';
import StepBackButton from './buttons/StepBackButton';

import {calculateWinner}  from './helper/helper.js';

class Game extends React.Component {
    
    constructor(props){
        super(props);
        this.state = this.initialize()
    }

    initialize() {
        const maxTime = 20;

        return {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            time: maxTime,
        };
    }

    handleClick(square) {
        const history = this.state.history;
        const squares = history[history.length - 1].squares.slice()
        if (calculateWinner(squares) || squares[square] || (this.state.time == 0)) {
            return;
        }
        squares[square] = this.state.xIsNext ? 'X' : 'O'
        this.setState( { 
            history: history.concat( [{ squares:squares }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    resetGame(){
        this.setState(this.initialize());
    }

    stepBackButton(step,move) {
        const desc = move ? 
        'Go to move #'+move : 'Go to game start';
        return (<li key={move.toString()} value={move}>
            <button onClick={ () => this.jumpTo(move)}>{desc}</button>
        </li>);
    }
    jumpTo(move) {
        const history = this.state.history;
        const aMove = history[move].squares.slice();
        this.setState( {
            stepNumber: move,
            history: history.concat([ { squares: aMove }]),
            xIsNext: (move % 2) == 0,
        })
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner_row = calculateWinner(current.squares);

     return (
        <div className="game">  
          <div className="game-status game-panel">
          <GameStatus 
                moves={9 - this.state.stepNumber} 
                winner={ winner_row ?  current.squares[winner_row[0]] : false } 
                next={this.state.xIsNext?'X':'O'}/>
          </div>
          <div className="game-board game-panel">  
          <Clock maxTime={this.state.time} resetFunction= {()=> this.resetGame()} />          
            <Board squares={current.squares} winner={winner_row}
            onClick={ (i) => this.handleClick(i) }/>
          </div>
          
          <div className="game-info game-panel">
            <ol>
                { history.map((x,y) => 
                    <StepBackButton move={y} stepBack={(y) => this.jumpTo(y)} />                    
                )}
                </ol>
          </div>
        </div>
      );
    }
  }

  export default Game;
