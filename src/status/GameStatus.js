import React from 'react';

function GameStatus(props) {
    const className = (props.winner) ? 'winner' : 'no-winner';
    const status = (props.winner) ? 
                        'Winner: ' + props.winner 
                        : props.moves + ' moves left. ' ;

    const nextPlayer =  (props.moves > 0) ?
                        'Next player: ' + props.next
                        : ' ヾ(×× ) ﾂ ' ;
    
      return (
       <div className="status">
         <h1 className={className}> {status} </h1>
         <p> {nextPlayer} </p>
        </div>
    );

}

export default GameStatus;