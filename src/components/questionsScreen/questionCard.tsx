import { decode } from "html-entities";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { useEffect, useState } from "react";
import AnswerButton from "./answerButton";

interface QuestionCardProps {
  currentQuestion: {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  setSelectedAnswer: React.Dispatch<React.SetStateAction<quizAnswer>>;
}

export default function QuestionCard({
  currentQuestion,
  setSelectedAnswer,
}: QuestionCardProps) {
  const [answers, setAnswers] = useState<string[]>([]);

  function handleSelectedAnswer(value: string) {
    const selected: quizAnswer = {
      question: currentQuestion.question,
      selectedAnswer: value,
      correctAnswer: currentQuestion.correct_answer,
    };

    setSelectedAnswer(selected);
  }

  // answers will be in random orders
  useEffect(() => {
    function randomAnswers() {
      const randomIndex = Math.floor(Math.random() * 4);
      const newAnswers = [...currentQuestion.incorrect_answers];
      newAnswers.splice(randomIndex, 0, currentQuestion.correct_answer);
      setAnswers(newAnswers);
    }

    randomAnswers();
  }, [currentQuestion.incorrect_answers, currentQuestion.correct_answer]);

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.text, styles.text]}>
        {decode(currentQuestion.question)}
      </Text>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <AnswerButton
            answer={answer}
            handleSelectedAnswer={handleSelectedAnswer}
            key={index}
          />
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
