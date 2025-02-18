import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface QuestionCardProps {
  question: {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View>
      <Text style={[globalStyles.text, styles.text]}>{question.question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
