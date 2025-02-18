import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { questionsFetch as getQuestions } from "../api/questions/questionsFetch";
import QuestionCard from "./questionCard";
import { globalStyles } from "../../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import QuestionCount from "./questionCount";
import NextQuestionButton from "./nextQuestionButton";

interface QuestionWrapperProps {
  questionIndex: number;
  moveToNextQuestion: () => void;
}

export default function QuestionsWrapper({
  questionIndex,
  moveToNextQuestion
}: QuestionWrapperProps) {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedAnswer, setSelectedAnswer] = useState<quizAnswer>();
  const [quizAnswers, setQuizAnswers] = useState<quizAnswer[]>([]);

  function handleQuizAnswers(quizAnswer: quizAnswer) {
    setQuizAnswers([...quizAnswers, quizAnswer]);
  }

  // function moveToNextQuestion() {}

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
    navigation.navigate("ResultsPage" as never);
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
        setSelectedAnswer={setSelectedAnswer}
      />
      <NextQuestionButton
        moveToNextQuestion={moveToNextQuestion}
        handleQuizAnswers={handleQuizAnswers}
        selectedAnswer={selectedAnswer}
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
