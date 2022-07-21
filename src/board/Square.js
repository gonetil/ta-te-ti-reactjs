function Square(props) {    //function component
    const className = "square row"+ props.row + " col"+ props.col + (props.winner ? " winner " : "");
    return (
      <button className={className}
              onClick={ props.onClick }>
        { props.value }
      </button>
    );
}


export default Square;