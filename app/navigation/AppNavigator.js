import { createNativeStackNavigator } from "@react-navigation/native-stack";

// navigation
import { Routes } from "./index";

// screens
import { HomeScreen } from "../pages";

// constants
import { COLORS } from "../constants";

// components
import { UIHeader, UIHeaderBack } from "../components";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.green.green400,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: "normal",
        },
        headerTitleAlign: "center",
        headerShown: true,
        headerBackTitleVisible: false,
        headerLeft: (props) => <UIHeaderBack />,
      }}
    >
      <Stack.Screen name={Routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
