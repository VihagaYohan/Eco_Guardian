import { createNativeStackNavigator } from "@react-navigation/native-stack";

// navigation
import { Routes } from "./index";

// screens
import { HomeScreen } from "../pages";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
