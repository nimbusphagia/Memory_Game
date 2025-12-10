function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="cardImg" src={cardObj.image} />
      <h3 className="cardTitle">{cardObj.title}</h3>
    </div>
  )
}
export default Card;
