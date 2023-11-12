import './GameOver.css'

const GameOver = ({ retry, score, imgGameOver}) => {
  return (
    <div>
      <img src={imgGameOver} alt="Game Over" id='finishImg'/>
        <h2 id='finishH2'>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  )
}

export default GameOver