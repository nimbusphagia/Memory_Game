import { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/header.css'
import './styles/board.css'
import Scores from './components/Scores.jsx';
import Difficulty from './components/Difficulty.jsx';
import Board from './components/Board.jsx';
import Popup from './components/Popup.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [diff, setDiff] = useState(0); //0=easy,1=medium,2=hard
  const [films, setFilms] = useState([]);
  const [cards, setCards] = useState([]);
  const [played, setPlayed] = useState([]);
  const [gamestate, setGamestate] = useState(0) // 0=playing, 1=won, 2=lost 
  //LOAD FILMS FROM API
  useEffect(() => {
    async function loadFilms() {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const data = await res.json();
        setFilms(data);
      } catch (err) {
        console.error("Connection error:", err);
      }
    }
    loadFilms();
  }, []);
  //GET CARDS ACCORDING TO DIFFICULTY
  useEffect(() => {
    function getBoardSize() {
      if (diff === 0) {
        return 10;
      } else if (diff === 1) {
        return 16;
      } else {
        return 22;
      }
    }
    function getPlayingCards() {
      const size = getBoardSize();
      const copy = [...films];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      const selected = copy.slice(0, size);
      setCards(selected);
    }
    getPlayingCards();
  }, [diff, films, gamestate]);


  function reshuffleCards() {
    setCards(prev => {
      const copy = [...prev];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  }

  function handleScore() {
    setScore(prev => {
      const newScore = prev + 1;

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      return newScore;
    });
  }
  function restartGame() {
    setScore(0);
    setPlayed([]);
    setGamestate(0);
  }

  function handleDifficulty(difficulty) {
    restartGame();
    setBestScore(0);
    setDiff(difficulty);
  }


  function playCard(card) {
    //  LOSE LOGIC
    if (played.some(c => c.id === card.id)) {
      setGamestate(2);
      return;
    }

    //  PLAY LOGIC
    const newPlayed = [...played, card];
    setPlayed(newPlayed);
    handleScore();

    // WIN LOGIC 
    if (newPlayed.length === cards.length) {
      setGamestate(1);
    } else {
      reshuffleCards();
    }
  }

  return (
    <>
      <header>
        <div className='gameTitle'>
          <h1>Ghibli Memorium</h1>
        </div>
        <Scores
          current={score}
          best={bestScore}
        />
        <Difficulty
          handleDiff={handleDifficulty}
        />

      </header>
      <main>
        <Board
          cards={cards}
          handleClick={playCard}
        />
        {gamestate !== 0 && <Popup status={gamestate} restart={restartGame} />}
      </main>
    </>
  )
}

export default App
