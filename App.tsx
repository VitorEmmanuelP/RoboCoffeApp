import { StatusBar, View, Text } from "react-native";
import Home from "./src/Screens/Home";
import { styles } from "./src/common/styles";
import Login from "./src/Screens/Login";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StackComponent } from "./src/core/routes";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Inder-Regular": require("./src/common/fonts/Inder/Inder-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        SetIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (IsReady) {
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text>SplashScreen Demo! 👋</Text>
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: styles.colors.gray_600 }}
      onLayout={onLayoutRootView}
    >
      <StatusBar backgroundColor={styles.colors.gray_400} />
      <StackComponent />
    </View>
  );
};

export default App;
