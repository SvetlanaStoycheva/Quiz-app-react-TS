import { shuffleArray } from './utils';
import QuestionCard from './components/QuestionCard';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

//this new type will use the types of Question but add the property answers to it.
export type QuestionState = Question & { answers: string[] };

//enum makes sure that we can only use this values
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  //   console.log(data);

  //add to every data.results.question a propery answers with shuffled [correct + all incorrect answers]. In the console, in Promise, we can see the questions with the new property answers.
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
