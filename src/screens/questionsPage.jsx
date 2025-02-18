import { Alert, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { globalStyles } from "../../globalStyles";

export default function QuestionsPage() {
  const navigation = useNavigation();

  //   useEffect(() => {
  //     const navigationAlert = navigation.addListener("beforeRemove", (e) => {
  //       e.preventDefault();
  //       Alert.alert(
  //         "If you go back now, you will lose all your progress. Are you sure you want to go back?",
  //         // [{ text: "OK", style: "cancel" }]
  //       );
  //     });

  //     return navigationAlert;
  //   });

//   useFocusEffect(() => {
//     const navigationAlert = navigation.addListener("blur", (e) => {
//       e.preventDefault();
//       Alert.alert(
//         "If you go back now, you will lose all your progress. Are you sure you want to go back?"
//         // [{ text: "OK", style: "cancel" }]
//       );
//     });

//     return navigationAlert;
//   });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Questions Page</Text>
    </View>
  );
}
