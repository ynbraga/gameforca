import './GameOver.css'

const GameOver = ({ retry, score, imgGameOver, pickedWord}) => {
  return (
    <div>
      <img src={imgGameOver} alt="Game Over" id='finishImg'/>
      <h1 id='gameOverH1'>A palavra era: <span id="gameOver">{pickedWord}</span></h1>
        <h2 id='finishH2'>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  )
}

export default GameOver