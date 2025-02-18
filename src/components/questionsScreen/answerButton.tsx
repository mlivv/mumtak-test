import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { decode } from "html-entities";

interface AnswerButtonProps {
  answer: string;
  handleSelectedAnswer: (value: string) => void;
}

export default function AnswerButton({
  answer,
  handleSelectedAnswer,
}: AnswerButtonProps) {
  return (
    <Pressable
      style={[globalStyles.quizAnswerButton, styles.button]}
      onPress={() => handleSelectedAnswer(answer)}
    >
      <Text style={[globalStyles.text, styles.text]}>{decode(answer)}</Text>
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
