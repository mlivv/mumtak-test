import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AnswerButton from "./answerButton";

interface AnswersWrapperProps {
  handleAnswerSelection: (value: string) => void;
  currentQuestion: QuizQuestion;
  currentResponse: QuizResponse;
}

export default function AnswersWrapper({
  handleAnswerSelection,
  currentQuestion,
  currentResponse,
}: AnswersWrapperProps) {
  const [options, setOptions] = useState<string[]>([]);

  // answers will be in random orders
  useEffect(() => {
    function answersInRandomOrder() {
      const randomIndex = Math.floor(Math.random() * 4);
      const newOptions = [...currentQuestion.incorrect_answers];
      newOptions.splice(randomIndex, 0, currentQuestion.correct_answer);
      setOptions(newOptions);
    }

    answersInRandomOrder();
  }, [currentQuestion.incorrect_answers, currentQuestion.correct_answer]);

  return (
    <View style={styles.answersContainer}>
      {options.map((option, index) => (
        <AnswerButton
          selected={
            currentResponse !== undefined &&
            currentResponse.selectedAnswer === option
          }
          option={option}
          handleAnswerSelection={handleAnswerSelection}
          key={index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    gap: 15,
  },
});
