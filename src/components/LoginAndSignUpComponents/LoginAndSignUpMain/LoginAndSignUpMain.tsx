import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";

interface LoginAndSignUpMainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export default function LoginAndSignUpMain({ navigation }: LoginAndSignUpMainProps) {
  const login = () => {};

  const register = () => {};

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Image source={require("../../img/logo.png")} style={styles.reactLogo} />

        <Text style={styles.textPublic}>Publications</Text>

        <View style={styles.containerTextLogin}>
          <Text style={styles.textLoginOrRegister}>Bem-vindo!</Text>
          <Text style={styles.textLoginOrRegister}>Acesse sua conta ou registre-se</Text>
        </View>

        <View style={styles.containerButtonLoginOrSignUp}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Login", undefined)}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => navigation.navigate("SignUp", undefined)}
          >
            <Text style={styles.textButtonRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
