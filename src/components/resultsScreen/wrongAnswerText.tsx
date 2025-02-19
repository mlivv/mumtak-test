import { Ionicons } from "@expo/vector-icons";
import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";

interface CorrectAnswer {
  answer: string | null;
}

export default function WrongAnswerText({ answer }: CorrectAnswer) {
  return (
    <View style={styles.answersWrapper}>
      <Ionicons name="ban-outline" size={17} color={"red"} />
      <Text style={styles.text}>{answer !== null ? decode(answer) : "--"}</Text>
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
