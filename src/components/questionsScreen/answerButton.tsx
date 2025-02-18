import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface AnswerButtonProps {
  answer: string;
}

export default function AnswerButton({ answer }: AnswerButtonProps) {
  return (
    <Pressable style={[globalStyles.quizAnswerButton, styles.button]}>
      <Text style={[globalStyles.text, styles.text]}>{answer}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // minWidth: "100%",
  },
  text: {
    textAlign: "center",
  },
});
