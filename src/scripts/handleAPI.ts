import { ShuffleArray } from "./utilities";


//Types Exports
export type Question={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question:string;
    type:string;
}

export type QuestionsState=Question & {answers:string[]}

export enum Diffuculty{
    EASY='easy',
    MEDIUM='medium',
    HARD='hard',
}

//functions export
export const FetchQuizzQuestion= async (amount: number, difficulty: Diffuculty) =>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data= await ((await fetch(endpoint)).json())
    return data.results.map((question:Question)=>{
        return {
            ...question,
            answers: ShuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    })
}