import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginAndSignUpMain from "@/src/components/LoginAndSignUpComponents/LoginAndSignUpMain/LoginAndSignUpMain";
import { createStackNavigator } from "@react-navigation/stack";
import LoginMain from "@/src/components/loginMainComponents/LoginMain";
import { useEffect } from "react";
import HomeMain from "@/src/components/HomeComponents/HomeMain/HomeMain";
import SignUp from "@/src/components/signUpComponents/signUpMain";

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  LoginAndSignUp: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
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
    <Stack.Navigator initialRouteName="LoginAndSignUp">
      <Stack.Screen name="LoginAndSignUp" component={LoginAndSignUpMain} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginMain} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeMain} options={{ headerShown: false }} />
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
