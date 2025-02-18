import { Pressable, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { StackActions, useNavigation } from "@react-navigation/core";

export default function HomeButton() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[globalStyles.button, styles.button]}
      onPress={() => navigation.dispatch(StackActions.replace("Home"))}
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
