function Scores({ current, best }) {
  return (
    <div className="Scores">
      <div className="scoreItem scoreCurrent">
        <h3>Score</h3>
        <p className="scoreDisplay">{current}</p>
      </div>
      <div className="scoreItem scoreBest">
        <h3>Best</h3>
        <p className="scoreDisplay">{best}</p>
      </div>
    </div>
  )
}
export default Scores;
