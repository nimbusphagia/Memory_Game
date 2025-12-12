function Popup({ status, restart }) {
  function showMsg() {
    let msg = '';
    if (status === 1) {
      msg = 'You won!';
    } else if (status === 2) {
      msg = 'You lost!';
    }
    return (<div className="popup">
      <h2 className="message">
        {msg}
      </h2>
      <button className="btn" onClick={restart}>Play again</button>
    </div>)

  }
  return (
    <div className="curtain">
      {showMsg()}
      {console.log(status)}
    </div>
  )
}
export default Popup;
