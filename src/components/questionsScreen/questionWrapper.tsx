import { StackActions, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { QuizResponse } from "../../models/quizResponse";
import { UserResponsesContext } from "../context/userResponsesContext/userResponsesContext";
import NextQuestionButton from "./nextQuestionButton";
import QuestionCard from "./questionCard";
import QuestionCount from "./questionCount";

interface QuestionWrapperProps {
  questionIndex: number;
  moveToNextQuestion: () => void;
  hasTimerEnded: boolean;
  questions: any[];
}

export default function QuestionsWrapper({
  questionIndex,
  moveToNextQuestion,
  hasTimerEnded,
  questions,
}: QuestionWrapperProps) {
  const navigation = useNavigation();
  const [currentResponse, setCurrentResponse] =
    useState<QuizResponse>(undefined);
  const [quizResponses, setQuizResponses] = useState<QuizResponse[]>([]);
  const { userResponses, setUserResponses } = useContext(UserResponsesContext);

  // current reponse will reset to "undefined" every time the timer resets
  useEffect(() => {
    setCurrentResponse(undefined);
  }, [questionIndex]);

  function handleQuizResponse(quizAnswer: QuizResponse) {
    const updatedAnswer = hasTimerEnded
      ? {
          ...quizAnswer,
          selectedAnswer: null,
        }
      : quizAnswer;

    setQuizResponses([...quizResponses, updatedAnswer]);
    setUserResponses([...userResponses, updatedAnswer]);
  }

  // if timer has ended and the user didn't select a question,
  // the property "selectedAnswer" will have "null" as a value
  useEffect(() => {
    if (hasTimerEnded) {
      handleQuizResponse(questions[questionIndex]);
    }
  }, [hasTimerEnded]);

  if (questionIndex === questions.length) {
    navigation.dispatch(StackActions.replace("ResultsPage"));
    return null;
  }

  return (
    <View style={styles.container}>
      <QuestionCount
        currentQuestionIndex={questionIndex}
        totalQuestions={questions.length}
      />
      <QuestionCard
        currentQuestion={questions[questionIndex]}
        setCurrentResponse={setCurrentResponse}
        currentResponse={currentResponse}
      />
      <NextQuestionButton
        disabled={currentResponse === undefined}
        moveToNextQuestion={moveToNextQuestion}
        handleQuizResponse={handleQuizResponse}
        selectedAnswer={currentResponse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    minHeight: "90%",
  },
});
