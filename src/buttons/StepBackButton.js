import React from 'react';

class StepBackButton extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        move : props.move,
        stepBack : props.stepBack
    }
  }

  rollBack() {
    this.state.stepBack(this.state.move)
  }

  render() {
    const move = this.state.move;
    const desc = this.state.move ? 
    'Go to move #'+move : 'Go to game start';
    return (<li key={move.toString()} value={move}>
        <button onClick={ () => this.state.stepBack(this.state.move) }>{desc}</button>
    </li>);
  }

}
export default StepBackButton;