import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface NextQuestionButton {
  handleQuizAnswers: (quizAnswer: quizAnswer) => void;
  selectedAnswer: quizAnswer;
  moveToNextQuestion: () => void;
}

export default function NextQuestionButton({
  handleQuizAnswers,
  selectedAnswer,
  moveToNextQuestion,
}: NextQuestionButton) {
  return (
    <Pressable
      style={[globalStyles.button, styles.button]}
      onPress={() => {
        handleQuizAnswers(selectedAnswer);
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
