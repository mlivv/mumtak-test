import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface QuestionCountProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

export default function QuestionCount({
  currentQuestionIndex,
  totalQuestions,
}: QuestionCountProps) {
  return (
    <Text style={[globalStyles.text, styles.questionIndexText]}>{`Question ${
      currentQuestionIndex + 1
    }/${totalQuestions}`}</Text>
  );
}

const styles = StyleSheet.create({
  questionIndexText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#554972",
    paddingTop: 30,
  },
});
