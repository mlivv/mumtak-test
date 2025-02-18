import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import QuestionsPage from "./src/screens/questionsPage";
import ResultsPage from "./src/screens/resultsPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
        <Stack.Screen name="ResultsPage" component={ResultsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
