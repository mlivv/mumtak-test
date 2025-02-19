import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { StackActions, useNavigation } from "@react-navigation/core";
import { useContext } from "react";
import { UserResponsesContext } from "../context/userResponsesContext/userResponsesContext";

export default function HomeButton() {
  const navigation = useNavigation();
  const { userResponses, setUserResponses } = useContext(UserResponsesContext);

  return (
    <Pressable
      style={[globalStyles.button, styles.button]}
      onPress={() => {
        setUserResponses([]), navigation.dispatch(StackActions.replace("Home"));
      }}
    >
      <Text style={globalStyles.buttonText}>Home</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 35,
  },
});
