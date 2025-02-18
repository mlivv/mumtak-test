import { useContext } from "react";
import { View } from "react-native";
import { globalStyles } from "../../globalStyles";
import { UserResponsesContext } from "../components/context/userResponsesContext/userResponsesContext";
import HomeButton from "../components/resultsScreen/homeButton";
import ResponsesDisplayWrapper from "../components/resultsScreen/responsesDisplayWrapper";
import UserScoreMessage from "../components/resultsScreen/userScoreMessage";

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
