import './StartScreen.css'

const StartScreen = ({ startGame, imgForca}) => {
  return (
    <div className='start'>
        <img src={imgForca} alt="" />
        <h1>Jogo da Forca</h1>
        <p>Clique no botão abaixo para começar a jogar!</p>
        <button onClick={startGame}>Começar</button>
        <div>
            <footer>Developed by: <a href="https://www.linkedin.com/in/yure-braga-15705a252/">Yure Braga</a></footer>
        </div>
    </div>
  )
}

export default StartScreen