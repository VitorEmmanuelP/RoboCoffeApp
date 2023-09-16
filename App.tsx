import { StatusBar, View } from "react-native";
import Home from "./src/Screens/home";
import { styles } from "./src/common/styles";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={styles.colors.gray_700} />
      <Home />
    </View>
  );
};

export default App;
