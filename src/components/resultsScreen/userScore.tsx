import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { QuizResponse } from "../../models/quizResponse";

interface UserScoreProps {
  responses: QuizResponse[];
}

export default function UserScore({ responses }: UserScoreProps) {
  let score = 0;
  let maxScore = 0;

  function calculateMaxScore() {
    
  }

  function calculateScore() {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i].selectedAnswer === responses[i].correctAnswer) {
        score++;
      }
    }
  }

  calculateScore();

  return (
    <View>
      <Image
        source={require("../../../assets/party_popper.png")}
        style={styles.image}
      />
      <Text style={globalStyles.text}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
