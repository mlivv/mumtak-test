import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { questionsFetch as getQuestions } from "../api/questions/questionsFetch";
import QuestionCard from "./questionCard";
import { globalStyles } from "../../../globalStyles";

interface QuestionWrapperProps {
  questionIndex: number;
}

export default function QuestionsWrapper({
  questionIndex,
}: QuestionWrapperProps) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("QuestionsPage");

    async function fetchData() {
      try {
        const data = await getQuestions();
        setQuestions(data.results);
        setLoading(false);
        console.log(data.results);
        // console.log(data[questionIndex]);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={globalStyles.text}>{`Question ${questionIndex + 1}/${
        questions.length
      }`}</Text>
      <QuestionCard question={questions[questionIndex]} />
    </View>
  );
}
