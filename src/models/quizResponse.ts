import { difficulty } from "./quizQuestion";

export interface QuizResponse {
  question: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  difficulty: difficulty;
}
