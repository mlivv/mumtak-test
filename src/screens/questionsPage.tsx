import { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../../globalStyles";
import QuestionsWrapper from "../components/questionsScreen/questionWrapper";
import Timer from "../components/questionsScreen/timer";

export default function QuestionsPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resetTimerTrigger, setResetTimerTrigger] = useState(0);
  const [hasTimerEnded, setHasTimerEnded] = useState<boolean>(false);

  function moveToNextQuestion() {
    setQuestionIndex((prev) => prev + 1);
    setResetTimerTrigger((prev) => prev + 1);
  }

  return (
    <View style={globalStyles.container}>
      <Timer
        setHasTimerEnded={setHasTimerEnded}
        moveToNextQuestion={moveToNextQuestion}
        resetTimerTrigger={resetTimerTrigger}
      />
      <QuestionsWrapper
        hasTimerEnded={hasTimerEnded}
        questionIndex={questionIndex}
        moveToNextQuestion={moveToNextQuestion}
      />
    </View>
  );
}
