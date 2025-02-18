import { StackActions, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { questionsFetch as getQuestions } from "../api/questions/questionsFetch";
import NextQuestionButton from "./nextQuestionButton";
import QuestionCard from "./questionCard";
import QuestionCount from "./questionCount";
import { UserResponsesContext } from "../context/userResponsesContext/userResponsesContext";

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
  const { userResponses, setUserResponses } = useContext(UserResponsesContext);

  useEffect(() => {
    setCurrentResponse(undefined);
  }, [questionIndex]);

  function handleQuizResponse(quizAnswer: QuizResponse) {
    //  TODO elimina quizresponses
    setQuizResponses([...quizResponses, quizAnswer]);
    setUserResponses([...quizResponses, quizAnswer]);
  }

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
