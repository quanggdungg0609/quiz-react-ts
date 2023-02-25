import React from 'react'
//styles
import '../styles/QuestionCard.scss'
//types
import { AnswerObject } from '../App';

type Props={
    question: string;
    answers: string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestion}) => {
  return (
    <div className='question-card'>
        <p className='number'>
            Question: { questionNumber} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div className='answers'>
            {answers.map(answer=>{
                return (
                    <button key={answer} disabled={userAnswer? true: false} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default QuestionCard