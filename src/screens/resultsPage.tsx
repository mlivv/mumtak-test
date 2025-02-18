import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { UserResponsesContext } from "../components/context/userResponsesContext/userResponsesContext";
import { globalStyles } from "../../globalStyles";
import ResponsesDisplayWrapper from "../components/resultsScreen/responsesDisplayWrapper";
import UserScore from "../components/resultsScreen/userScore";

export default function ResultsPage() {
  const { userResponses } = useContext(UserResponsesContext);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.text}>Results Page</Text> */}
      <UserScore responses={userResponses} />
      <ResponsesDisplayWrapper responses={userResponses} />
    </View>
  );
}
