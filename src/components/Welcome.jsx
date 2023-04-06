import React from 'react'
import welcome_red from "../img/welcome_red.svg";
import "./Welcome.css";

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id ="welcome">
        <h2>Seja bem-vindo!!</h2>
        <p>Clique no botão para começar!</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE"})}>Iniciar quiz</button>
        <img src={welcome_red} alt="Inicio do quis" />
    </div>
  )
}

export default Welcome