
function Card({ cardObj, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(cardObj)}>
      <img className="cardImg" src={cardObj.image} />
    </div>
  )
}
export default Card;
