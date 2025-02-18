import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../globalStyles";
import { UserResponsesContext } from "../components/context/userResponsesContext/userResponsesContext";
import ResponsesDisplayWrapper from "../components/resultsScreen/responsesDisplayWrapper";
import UserScoreMessage from "../components/resultsScreen/userScoreMessage";
import HomeButton from "../components/resultsScreen/homeButton";

export default function ResultsPage() {
  const { userResponses } = useContext(UserResponsesContext);

  return (
    <View style={[globalStyles.container]}>
      <UserScoreMessage responses={userResponses} />
      <ResponsesDisplayWrapper responses={userResponses} />
      <HomeButton />
    </View>
  );
}
