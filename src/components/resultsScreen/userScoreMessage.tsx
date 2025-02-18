import { View } from "react-native";
import { QuizResponse } from "../../models/quizResponse";
import CelebrationMessage from "./celebrationMessage";
import EncouragementMessage from "./encouragementMessage";

interface UserScoreProps {
  responses: QuizResponse[];
}

export default function UserScoreMessage({ responses }: UserScoreProps) {
  const difficultyPoints = {
    easy: 0.25,
    medium: 0.5,
    hard: 0.75,
  };

  function calculateMaxScore() {
    return responses.reduce((total, response) => {
      const maxPointsPossible = difficultyPoints[response.difficulty];
      return total + Math.round(maxPointsPossible);
    }, 0);
  }

  function calculateScore() {
    let totalScore = 0;
    responses.forEach((response) => {
      if (response.selectedAnswer === response.correctAnswer) {
        score = difficultyPoints[response.difficulty];
        totalScore += Math.round(score);
      }
    });

    return totalScore;
  }

  let score = calculateScore();
  let maxScore = calculateMaxScore();
  const correctAnswers = responses.filter(
    (response) => response.selectedAnswer === response.correctAnswer
  ).length;

  return (
    <View>
      {score > maxScore * 0.5 ? (
        <CelebrationMessage
          correctAnswers={correctAnswers}
          totalAnswers={responses.length}
        />
      ) : (
        <EncouragementMessage
          correctAnswer={correctAnswers}
          totalAnswers={responses.length}
        />
      )}
    </View>
  );
}
