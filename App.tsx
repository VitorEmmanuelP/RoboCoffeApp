import { StatusBar, View, Text } from "react-native";
import Home from "./src/Screens/home";
import { styles } from "./src/common/styles";
import Login from "./src/Screens/Login";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StackComponent } from "./src/core/routes";
import { toastConfig } from "./src/components/toast/Toast";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserInfoProvider } from "./src/contexts/userInfo";
import { Provider } from "react-redux";
import { store } from "./src/storage/redux/store";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await Font.loadAsync({
  //         "Inder-Regular": require("./src/common/fonts/Inder/Inder-Regular.ttf"),
  //       });
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       SetIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (IsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [IsReady]);

  // if (!IsReady) {
  //   return (
  //     <View
  //       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //       // onLayout={onLayoutRootView}
  //     >
  //       <Text>SplashScreen Demo! 👋</Text>
  //     </View>
  //   );
  // }

  return (
    <View
      style={{ flex: 1, backgroundColor: styles.colors.green_400 }}
      // onLayout={onLayoutRootView}
    >
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <UserInfoProvider>
            <StatusBar backgroundColor={styles.colors.green_400} />
            <StackComponent />
            <Toast config={toastConfig} />
          </UserInfoProvider>
        </GestureHandlerRootView>
      </Provider>
    </View>
  );
};

export default App;
