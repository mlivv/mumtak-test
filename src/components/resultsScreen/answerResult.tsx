import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { decode } from "html-entities";

interface CorrectAnswer {
  answer: string;
  correctAnswer: boolean;
}

export default function AnswerResult({ answer, correctAnswer }: CorrectAnswer) {
  return (
    <View>
      {correctAnswer ? (
        <View style={styles.answersWrapper}>
          <Ionicons name="checkmark-circle-outline" size={18} color={"green"} />
          <Text style={styles.text}>{decode(answer)}</Text>
        </View>
      ) : (
        <View style={styles.answersWrapper}>
          <Ionicons name="ban-outline" size={17} color={"red"} />
          <Text style={styles.text}>{decode(answer)}</Text>
        </View>
      )}
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
