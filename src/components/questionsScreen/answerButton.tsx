import { decode } from "html-entities";
import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface AnswerButtonProps {
  option: string;
  handleAnswerSelection: (value: string) => void;
  selected: boolean;
}

export default function AnswerButton({
  option,
  handleAnswerSelection,
  selected,
}: AnswerButtonProps) {
  return (
    <Pressable
      style={[
        globalStyles.quizAnswerButton,
        { backgroundColor: selected ? "#A196BC" : "#332C44" },
      ]}
      onPress={() => handleAnswerSelection(option)}
    >
      <Text style={[globalStyles.text, styles.text]}>{decode(option)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
