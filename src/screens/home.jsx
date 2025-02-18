import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>Hello</Text>
      <Text style={[globalStyles.text, styles.text]}>
        If you're ready to start your quiz, click the button below
      </Text>
      <Pressable
        style={[globalStyles.button, styles.button]}
        onPress={() => navigation.navigate("QuestionsPage")}
      >
        <Text style={globalStyles.buttonText}>Start quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  text: {
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
  },
});
