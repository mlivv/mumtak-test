import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import QuestionsPage from "./src/screens/questionsPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
