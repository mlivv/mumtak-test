import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { questionsFetch as getQuestions } from "../api/questions/questionsFetch";
import QuestionCard from "./questionCard";
import { globalStyles } from "../../../globalStyles";
import { useNavigation } from "@react-navigation/native";

interface QuestionWrapperProps {
  questionIndex: number;
}

export default function QuestionsWrapper({
  questionIndex,
}: QuestionWrapperProps) {
  const navigation = useNavigation();
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
      <Text style={[globalStyles.text, styles.questionIndexText]}>{`Question ${
        questionIndex + 1
      }/${questions.length}`}</Text>
      <QuestionCard question={questions[questionIndex]} />
      <Pressable style={[globalStyles.button, styles.button]}>
        <Text style={globalStyles.buttonText}>Next</Text>
      </Pressable>
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
  button: {
    position: "absolute",
    bottom: 0,
  },
  questionIndexText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#554972",
    paddingTop: 30,
  },
});
