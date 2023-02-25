import React from 'react'
import { NumberLiteralType } from 'typescript';
//styles
import {Wrapper, ButtonWrapper} from '../styles/QuestionCard.style'
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
    <Wrapper>
        <p className='number'>
            Question: { questionNumber} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map(answer=>{
                return (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer===answer}
                    userClicked={userAnswer?.answer===answer}     
                >
                    <button disabled={userAnswer? true: false} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
                )
            })}
        </div>
    </Wrapper>
  )
}

export default QuestionCard