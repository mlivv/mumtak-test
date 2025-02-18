import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1C152D",
    minHeight: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#362561",
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  quizAnswerButton: {
    padding: 20,
    borderColor: "#423957",
    borderRadius: 10,
    minWidth: "100%",
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
});
