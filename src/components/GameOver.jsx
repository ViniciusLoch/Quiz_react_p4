import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import quiz_weldone_red from "../img/quiz_weldone_red.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id = "gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={quiz_weldone_red} alt="fim de jogo" />
        <button onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver