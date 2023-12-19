import { createNativeStackNavigator } from "@react-navigation/native-stack";

// navigation
import { Routes, BottomNavigator } from "./index";

// screens
import { HomeScreen, LoginScreen, RegisterScreen } from "../pages";

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
        headerShown: false,
        headerBackTitleVisible: false,
        headerLeft: (props) => <UIHeaderBack />,
      }}
    >
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.register} component={RegisterScreen} />
      <Stack.Screen name={Routes.bottom} component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
