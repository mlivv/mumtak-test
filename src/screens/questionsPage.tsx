import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../globalStyles";
import { questionsFetch as getQuestions } from "../components/api/questions/questionsFetch";
import QuestionsWrapperAndTimer from "../components/questionsScreen/questionsWrapperAndTimer";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getQuestions();
        setQuestions(data.results);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Sorry, something went wrong.</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <QuestionsWrapperAndTimer questions={questions} />
    </View>
  );
}
