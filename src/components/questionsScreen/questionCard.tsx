import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { QuizQuestion } from "../../models/quizQuestion";
import { QuizResponse } from "../../models/quizResponse";
import AnswersWrapper from "./answersWrapper";

interface QuestionCardProps {
  currentQuestion: QuizQuestion;
  setCurrentResponse: React.Dispatch<React.SetStateAction<QuizResponse>>;
  hasTimerEnded: boolean;
  currentResponse: QuizResponse;
}

export default function QuestionCard({
  currentQuestion,
  setCurrentResponse,
  hasTimerEnded,
  currentResponse,
}: QuestionCardProps) {
  function handleAnswerSelection(value: string) {
    // const answer = hasTimerEnded ? null : value;
    setCurrentResponse({
      question: currentQuestion.question,
      selectedAnswer: value,
      correctAnswer: currentQuestion.correct_answer,
      difficulty: currentQuestion.difficulty,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.text, styles.text]}>
        {decode(currentQuestion.question)}
      </Text>
      <AnswersWrapper
        currentResponse={currentResponse}
        currentQuestion={currentQuestion}
        handleAnswerSelection={handleAnswerSelection}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  container: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
});
