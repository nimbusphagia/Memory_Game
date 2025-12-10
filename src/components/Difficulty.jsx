function Difficulty({ handleDiff }) {
  return (
    <div className='difficulty'>
      <button
        className='btn btnEasy'
        onClick={() => handleDiff(0)}
      >Easy</button>
      <button
        className='btn btnNormal'
        onClick={() => handleDiff(1)}
      >Normal</button>
      <button
        className='btn btnEasy'
        onClick={() => handleDiff(2)}
      >Hard</button>
    </div>
  )
}
export default Difficulty;
