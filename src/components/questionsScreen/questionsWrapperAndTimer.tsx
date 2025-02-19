import { useState } from "react";
import { View } from "react-native";
import QuestionsWrapper from "./questionWrapper";
import Timer from "./timer";

interface QuestionsDataWrapperProps {
  questions: any[];
}

export default function QuestionsWrapperAndTimer({
  questions,
}: QuestionsDataWrapperProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resetTimerTrigger, setResetTimerTrigger] = useState(0);
  const [hasTimerEnded, setHasTimerEnded] = useState<boolean>(false);

  function moveToNextQuestion() {
    setQuestionIndex((prev) => prev + 1);
    setResetTimerTrigger((prev) => prev + 1);
  }

  return (
    <View>
      <Timer
        setHasTimerEnded={setHasTimerEnded}
        moveToNextQuestion={moveToNextQuestion}
        resetTimerTrigger={resetTimerTrigger}
      />
      <QuestionsWrapper
        hasTimerEnded={hasTimerEnded}
        moveToNextQuestion={moveToNextQuestion}
        questionIndex={questionIndex}
        questions={questions}
      />
    </View>
  );
}
