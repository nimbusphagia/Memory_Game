import Card from './Card.jsx'
function Board({ cards, handleClick }) {
  return (
    <div className="board">
      {cards.map((c) =>
        <Card
          cardObj={c}
          key={c.id}
          handleClick={handleClick}
        />
      )}
    </div>
  )

}
export default Board;
