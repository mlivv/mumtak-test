import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface NextQuestionButton {
  handleQuizResponse: (quizAnswer: QuizResponse) => void;
  selectedAnswer: QuizResponse;
  moveToNextQuestion: () => void;
  disabled: boolean;
}

export default function NextQuestionButton({
  handleQuizResponse,
  selectedAnswer,
  moveToNextQuestion,
  disabled,
}: NextQuestionButton) {
  return (
    <Pressable
      style={[globalStyles.button, styles.button]}
      disabled={disabled}
      onPress={() => {
        handleQuizResponse(selectedAnswer);
        moveToNextQuestion();
      }}
    >
      <Text style={globalStyles.buttonText}>Next</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0,
  },
});
