import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Keyboard } from "react-native";
import { Registration } from "./screens/RegistrationScreen";
import { Login } from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import { TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/HomeScreen";
import { HeaderLogoutButton } from "./components/HeaderLogoutButton";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Публікації",
            headerRight: () => <HeaderLogoutButton />,
            headerStyle: {
              borderBottomWidth: 1
            }
          }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/images/Photo-BG.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <Registration />
            <Login />
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
