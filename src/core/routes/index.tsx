import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../../Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Reports from "../../Screens/Reports";
import Notifications from "../../Screens/Notifications";
import Notification from "../../Screens/Notification";

import { styles } from "../../common/styles";
import TabBar from "./customTabBar";
import Profile from "../../Screens/Profile";
import AddTerrain from "../../Screens/AddTerrain";
import Terreiros from "../../Screens/Terreiros";
import Terreiro from "../../Screens/Terreiro";
import CriarRelatorio from "../../Screens/CriarRelatorio";
import Report from "../../Screens/Report";
import Home from "../../Screens/home";

import Move from "../../Screens/Move";
import { View } from "react-native";
import { StackNavigation } from "./routes.types";

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
            <View
              style={{
                width: 40,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="file1"
                size={18}
                color={"white"}
                style={{ opacity: focused ? 1 : 0.5 }}
              />
            </View>
          ),
        }}
        name="Reports"
        component={Reports}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="home"
                size={ICON_SIZE}
                color="white"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="notifications-none"
                size={ICON_SIZE}
                color="white"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
            </View>
          ),
        }}
        name="Notifications"
        component={Notifications}
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
        name="Report"
        component={Reports}
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
          name="Tabs"
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
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddTerrain"
          component={AddTerrain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terreiro"
          component={Terreiro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terreiros"
          component={Terreiros}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CriarRelatorio"
          component={CriarRelatorio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportItem"
          component={Report}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Move"
          component={Move}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
