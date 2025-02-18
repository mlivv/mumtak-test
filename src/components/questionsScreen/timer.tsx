import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface TimerProps {
  handleQuestionIndex: () => void;
}

export default function Timer({ handleQuestionIndex }: TimerProps) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      if (timer === 0) {
        setTimer(15);
        handleQuestionIndex();
      } else {
        setTimer(timer - 1);
      }
    }, 1000);
  });

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
