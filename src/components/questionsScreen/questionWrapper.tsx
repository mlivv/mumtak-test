import { StackActions, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { QuizResponse } from "../../models/quizResponse";
import { questionsFetch as getQuestions } from "../api/questions/questionsFetch";
import { UserResponsesContext } from "../context/userResponsesContext/userResponsesContext";
import NextQuestionButton from "./nextQuestionButton";
import QuestionCard from "./questionCard";
import QuestionCount from "./questionCount";

interface QuestionWrapperProps {
  questionIndex: number;
  moveToNextQuestion: () => void;
  hasTimerEnded: boolean;
}

export default function QuestionsWrapper({
  questionIndex,
  moveToNextQuestion,
  hasTimerEnded,
}: QuestionWrapperProps) {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentResponse, setCurrentResponse] = useState<QuizResponse>();
  const [quizResponses, setQuizResponses] = useState<QuizResponse[]>([]);
  const { setUserResponses } = useContext(UserResponsesContext);

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
    setUserResponses([...quizResponses, updatedAnswer]);
  }

  // if timer has ended and the user didn't select a question, the property "selectedAnswer" will have "null" as a value
  useEffect(() => {
    console.log(quizResponses);
    console.log("has timer ended " + hasTimerEnded);
    if (hasTimerEnded) {
      handleQuizResponse(questions[questionIndex]);
    }
  }, [hasTimerEnded, quizResponses]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getQuestions();
        setQuestions(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Loading...</Text>
      </View>
    );
  }

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
        hasTimerEnded={hasTimerEnded}
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
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
});
