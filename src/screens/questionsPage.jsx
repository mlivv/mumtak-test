import { Suspense, useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../globalStyles";
import QuestionsWrapper from "../components/questionsScreen/questionWrapper";
import Timer from "../components/questionsScreen/timer";

export default function QuestionsPage() {
  console.log("QuestionsPage 1");
  const [questionIndex, setQuestionIndex] = useState(0);

  function handleQuestionIndex() {
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <View style={globalStyles.container}>
      <Timer handleQuestionIndex={handleQuestionIndex} />
      <Text style={globalStyles.text}>Questions Page</Text>
      {/* <Suspense fallback={<Text style={globalStyles.text}>Loading...</Text>}> */}
      <QuestionsWrapper questionIndex={questionIndex} />
      {/* </Suspense> */}
    </View>
  );
}

// TODO: Implement a warning alert when the user tries to go back
//   useFocusEffect(() => {
//     const navigationAlert = navigation.addListener("blur", (e) => {
//       e.preventDefault();
//       Alert.alert(
//         "If you go back now, you will lose all your progress. Are you sure you want to go back?"
//         // [{ text: "OK", style: "cancel" }]
//       );
//     });

//     return navigationAlert;
//   });
