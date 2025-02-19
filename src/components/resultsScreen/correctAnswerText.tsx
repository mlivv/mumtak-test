import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { decode } from "html-entities";

interface CorrectAnswerText {
  answer: string;
}

export default function CorrectAnswerText({ answer }: CorrectAnswerText) {
  return (
    <View style={styles.answersWrapper}>
      <Ionicons name="checkmark-circle-outline" size={18} color={"green"} />
      <Text style={styles.text}>{decode(answer)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  answersWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
  text: {
    color: "#fff",
  },
});
