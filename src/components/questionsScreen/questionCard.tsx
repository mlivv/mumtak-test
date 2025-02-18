import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { useEffect, useState } from "react";
import AnswerButton from "./answerButton";

interface QuestionCardProps {
  question: {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    function randomAnswers() {
      const randomIndex = Math.floor(Math.random() * 4);
      const newAnswers = [...question.incorrect_answers];
      newAnswers.splice(randomIndex, 0, question.correct_answer);
      setAnswers(newAnswers);
    }

    randomAnswers();
  }, [question.incorrect_answers, question.correct_answer]);

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.text, styles.text]}>
        {decode(question.question)}
      </Text>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <AnswerButton answer={answer} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  container: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
  answersContainer: {
    gap: 15,
  },
});
