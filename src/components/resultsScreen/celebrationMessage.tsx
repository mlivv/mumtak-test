import { Image, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface CelebrationMessageProps {
  correctAnswers: number;
  totalAnswers: number;
}

export default function CelebrationMessage({
  correctAnswers,
  totalAnswers,
}: CelebrationMessageProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/party_popper.png")}
        style={globalStyles.image}
      />
      <Text style={[globalStyles.text, styles.title, styles.text]}>
        Awesome!
      </Text>
      <Text style={styles.text}>
        You guessed {correctAnswers} questions correctly out of {totalAnswers}
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
