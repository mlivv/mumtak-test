import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface TimerProps {
  moveToNextQuestion: () => void;
  resetTimerTrigger: number;
  setHasTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer({
  moveToNextQuestion,
  resetTimerTrigger,
  setHasTimerEnded,
}: TimerProps) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setTimer(15);
  }, [resetTimerTrigger]);

  useEffect(() => {
    if (timer === 0) {
      setHasTimerEnded(true);
      setTimeout(() => {
        moveToNextQuestion();
      }, 1000);
      return;
    }

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <View style={styles.background}>
      <View
        style={[styles.timerBar, { width: `${(timer / 15) * 100}%` }]}
      ></View>
      <Text style={[globalStyles.text, styles.text]}>{timer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#251B3E",
    minWidth: "100%",
    position: "relative",
    height: 40,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
  },
  timerBar: {
    backgroundColor: "#362561",
    position: "absolute",
    height: 40,
    borderRadius: 15,
  },
  text: {
    position: "absolute",
    left: 15,
  },
});
