import React from 'react';


function ResetButton(props) {

    return (<button className="resetButton"
        onClick={() => props.resetFn(props.maxTime)}>
       Reset game
    </button> );
}

export default ResetButton;