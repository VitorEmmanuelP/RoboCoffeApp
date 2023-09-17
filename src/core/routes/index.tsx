import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../Screens/Home";
import Login from "../../Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Reports from "../../Screens/Report";
import Notifications from "../../Screens/Notifications";
import { styles } from "../../common/styles";
import TabBar from "./customTabBar";

export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Exemple: undefined;
};

const Stack = createNativeStackNavigator();
const TabsNavigation = () => {
  const Tab = createBottomTabNavigator();
  const ICON_SIZE = 24;
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderWidth: 0,
          backgroundColor: styles.colors.gray_600,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="file1"
              size={18}
              color={"white"}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
        name="Reports"
        component={Reports}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={ICON_SIZE}
              color="white"
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="notifications-none"
              size={ICON_SIZE}
              color="white"
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
    </Tab.Navigator>
  );
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export const StackComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="tabs"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
