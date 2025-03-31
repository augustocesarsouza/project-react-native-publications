import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginAndSignUpMain from "@/src/components/LoginAndSignUpComponents/LoginAndSignUpMain/LoginAndSignUpMain";
import { createStackNavigator } from "@react-navigation/stack";
import LoginMain from "@/src/components/loginMainComponents/LoginMain";
import SignUp from "@/src/components/signUpComponents/signUpMain/signUp";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    hideSplashScreen();
  }, []);

  return (
    // <SafeAreaView style={styles.container}></SafeAreaView>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={LoginAndSignUpMain} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginMain} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      {/* <LoginAndSignUpMain /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
