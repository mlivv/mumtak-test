import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
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
    const answer = hasTimerEnded ? null : value;
    setCurrentResponse({
      question: currentQuestion.question,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correct_answer,
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
