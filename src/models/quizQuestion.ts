type difficulty = "easy" | "medium" | "hard";

interface QuizQuestion {
  type: string;
  difficulty: difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
