import React, {useState} from 'react';

//Utilities
import { FetchQuizzQuestion } from './scripts/handleAPI'
//Components
import QuestionCard from './components/QuestionCard';

//types
import {Diffuculty, QuestionsState} from './scripts/handleAPI'
//styles
import './styles/App.scss'

const TOTAL_QUESTION =10


//interfaces
export type AnswerObject={
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


function App() {
  //States
  const [loading, setLoading]=useState(false)
  const [questions, setQuestions]=useState<QuestionsState[]>([])
  const [number, setNumber]=useState(0)
  const [userAnswers, setUserAnwers]=useState<AnswerObject[]>([])
  const [score, setScore]=useState(0)
  const [gameOver, setGameOver]=useState(true)

  const startQuizz= async ()=>{
    setLoading(true)
    setGameOver(false)

    const newQuestions= await FetchQuizzQuestion(TOTAL_QUESTION, Diffuculty.EASY)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnwers([])
    setNumber(0)
    setLoading(false)

  }

  const checkAnswer= (e:React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      //user answer
      const answer = e.currentTarget.value
      //check answer
      const correct =questions[number].correct_answer===answer
      const parentElement=e.currentTarget.parentElement
      //if correct increase score
      if (correct){
        setScore(prev=>prev+1)
      }
      //find the correct and set background color green, else red
      if (parentElement){
        const answerList= parentElement.childNodes
        Array.from(answerList).forEach((answerNode: Node)=>{
          const button= answerNode as HTMLButtonElement
          // const isCorrectAnswer= button.value===questions[number].correct_answer
          if (button.value === questions[number].correct_answer){
            button.classList.add('correct')
          }
          else{
            button.classList.add('incorrect')
          }
          //surround the selected answer of user
          if (button===e.currentTarget){
            button.classList.add('user-selected')
            console.log(button)
          }
        })
      }
      
      
     

      
      //save answer in the array for user answer
      const answerObject={
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnwers(prev=>[...prev, answerObject])
    }
  }

  const nextQuestion=()=>{
    //Move on the next question if not the last question\
    const nextQuestion=number+1
    if (nextQuestion===TOTAL_QUESTION){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
      <div className='App'>
      <h1> React quiz</h1>
      {gameOver || userAnswers.length===TOTAL_QUESTION ? (<button className='start' onClick={startQuizz}> Start </button>): null}
      {!gameOver ? (<p className='score'>Score: {score}</p>): null}
      {loading && (<p>Loading question ....</p>)}
      {!loading && !gameOver && 
        (<QuestionCard
          questionNumber={number+1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number]: undefined}
          callback={checkAnswer}
       />)}
      {!gameOver && !loading && userAnswers.length===number+1 && number!==TOTAL_QUESTION -1 ?
        (<button className='next'  onClick={nextQuestion}>Next Question</button>):null
      }
      
    </div>

    
  );
}

export default App;
