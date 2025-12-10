import Card from './Card.jsx'
function Board({ cards }) {
  return (
    <div className="board">
      {cards.map((c) =>
        <Card
          cardObj={c}
        />
      )}
    </div>
  )

}
export default Board;
