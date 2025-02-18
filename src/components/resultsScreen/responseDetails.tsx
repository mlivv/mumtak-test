import { Ionicons } from "@expo/vector-icons";
import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";
import AnswerResult from "./answerResult";
import { QuizResponse } from "../../models/quizResponse";

interface ResponseDetailsProps {
  response: QuizResponse;
}

export default function ResponseDetails({ response }: ResponseDetailsProps) {
  const isResponseCorrect = response.selectedAnswer === response.correctAnswer;

  return (
    <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{decode(response.question)}</Text>
        {isResponseCorrect ? (
          <AnswerResult
            correctAnswer={isResponseCorrect}
            answer={response.selectedAnswer}
          />
        ) : (
          <View>
            <AnswerResult
              correctAnswer={isResponseCorrect}
              answer={response.correctAnswer}
            />
            <AnswerResult
              answer={response.selectedAnswer}
              correctAnswer={true}
            />
          </View>
        )}
      </View>
      <View>
        {isResponseCorrect ? (
          <Ionicons name="checkmark-circle-outline" size={30} color={"green"} />
        ) : (
          <Ionicons name="ban-outline" size={25} color={"red"} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  textContainer: {
    maxWidth: "80%",
  },
  answersWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
});
