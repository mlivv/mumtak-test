import { useEffect, useState } from "react";
import { Text } from "react-native";
import { globalStyles } from "../../../globalStyles";

interface TimerProps {
  handleQuestionIndex: () => void;
}

export default function Timer({ handleQuestionIndex }: TimerProps) {
  const [timer, setTimer] = useState(15);

  // TODO funzione di callback per settare l'indice della domanda corrente allo scadere dei 15 secondi

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

  return <Text style={globalStyles.text}>{timer}</Text>;
}
