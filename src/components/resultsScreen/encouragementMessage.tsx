import { Image, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface EncouragementMessageProps {
  correctAnswer: number;
  totalAnswers: number;
}

export default function EncouragementMessage({
  correctAnswer,
  totalAnswers,
}: EncouragementMessageProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/flexed_biceps.png")}
        style={globalStyles.image}
      />
      <Text style={[globalStyles.text, styles.title, styles.text]}>
        You will do better next time
      </Text>
      <Text style={styles.text}>
        You guessed {correctAnswer} questions correctly out of {totalAnswers}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
