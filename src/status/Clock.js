import React, { useEffect, useState, useLayoutEffect }  from 'react';

import ResetButton from '../buttons/ResetButton';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        time : props.maxTime,
        date : new Date(),
        resetFunction: props.resetFunction,
     };
   }
 
   componentDidMount() {
    if (this.state.time >=  0) {  
      this.interval = setInterval(() => this.setState({time: (this.state.time>0)? this.state.time - 1:0}), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetClock(maxTime) {
    this.setState({time: maxTime});
    this.props.resetFunction();
  }
 
  render() {
    const status = (this.state.time > 0) ?  'Remaining time: ' + this.state.time + ' seconds' : 'Timeout';
    return (<div className="clockDateTime">
    <h2 className={(this.state.time > 0)?'countdown':'finished'}> {status} </h2>
    <p> Today is {this.state.date.toDateString()}</p>

    <ResetButton resetFn={() => this.resetClock(this.props.maxTime)} />
    </div>);
  }
}

 export default Clock;