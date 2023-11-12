import { useRef, useState } from 'react'
import './Game.css'

const Game = ({ 
     verifyLetter,
     pickedWord, 
     pickedCategory, 
     letters, 
     guessedLetters, 
     wrongLetters, 
     guesses, 
     score, 
    }) => {

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus();
    }

  return (
    <div className="game">
        <p className="points" id="pointsP">
            Pontuação: <span id='pointsScore'>{score}</span>
        </p>
        <h1>Adivinhe a palavra abaixo</h1>
        <h3 className="tip" id="tipH3">
            Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p id='midP'>Você ainda tem <span id='spanGuesses'>{guesses}</span> tentativas(s).</p>
        <div className="wordContainer" id='wordContainer'>
            {letters.map((letter, i) => 
              guessedLetters.includes(letter) ? (
                <span key={i} className="letter">
                  {letter}
                </span>
                ) : (
                <span key={i} className="blankSquare"></span>
                )
            )}
        </div>
        <div className="letterContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='letter' 
                maxLength="1" 
                required 
                onChange={(e) => setLetter(e.target.value)} 
                value={letter}
                ref={letterInputRef}
                />
                <button>Enviar</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p id='letterP'>Letras já utilizadas:</p>
            {wrongLetters.map((letter, i) => (
                <span id='LetterSpan' key={i}>{letter}, </span>
            ))}
        </div>
    </div>
    
  )
}

export default Game