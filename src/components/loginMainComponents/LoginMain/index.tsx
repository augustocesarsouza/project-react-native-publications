import { Animated, Keyboard, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";

interface LoginMainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
}

export default function LoginMain({ navigation }: LoginMainProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const labelTopEmail = useState(new Animated.Value(23))[0];
  const labelFontSizeEmail = useState(new Animated.Value(16))[0];

  const labelTopPassword = useState(new Animated.Value(23))[0];
  const labelFontSizePassword = useState(new Animated.Value(16))[0];

  const onFocusEmail = () => {
    Animated.timing(labelTopEmail, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSizeEmail, {
      toValue: 14,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onBlurEmail = () => {
    Animated.timing(labelTopEmail, {
      toValue: 23,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSizeEmail, {
      toValue: 16,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleLabelPress = () => {
    const input = emailInputRef.current as TextInput;
    input.focus();
  };

  const handleLabelPressPassword = () => {
    const input = passwordInputRef.current as TextInput;
    input.focus();
  };

  const onFocusPassword = () => {
    Animated.timing(labelTopPassword, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSizePassword, {
      toValue: 14,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onBlurPassword = () => {
    if (!password) {
      Animated.timing(labelTopPassword, {
        toValue: 23,
        duration: 150,
        useNativeDriver: false,
      }).start();

      Animated.timing(labelFontSizePassword, {
        toValue: 16,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const validationImg = () => {
    // validar email and password
    console.log("asd");
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.containerMain}>
      <View style={styles.container}>
        <FontAwesome
          name="arrow-left"
          size={15}
          color="black"
          style={styles.containerArrowLeft}
          onPress={() => navigation.navigate("Home", undefined)}
        />
        <View style={styles.containerIconUserAndTextLogin}>
          <FontAwesome name="user-circle" size={75} color="black" />
          <Text style={styles.headerLogin}>Login</Text>
        </View>

        <View style={styles.formMain}>
          <View style={styles.form}>
            <View style={styles.containerTextAndInputEmailAndPassword}>
              <Animated.Text
                style={[styles.labelEmail, { top: labelTopEmail, fontSize: labelFontSizeEmail }]}
                onPress={handleLabelPress}
              >
                Email
              </Animated.Text>
              {/* <Text style={styles.errorMessage}>{errorMessage}</Text> */}
              <TextInput
                onChangeText={setEmail}
                value={email ? email.toString() : ""}
                placeholder=""
                keyboardType="email-address"
                style={styles.input}
                onFocus={onFocusEmail}
                onBlur={onBlurEmail}
                ref={emailInputRef}
              ></TextInput>
            </View>
            <View style={styles.containerTextAndInputEmailAndPassword}>
              <Animated.Text
                style={[styles.labelPassword, { top: labelTopPassword, fontSize: labelFontSizePassword }]}
                onPress={handleLabelPressPassword}
              >
                Senha
              </Animated.Text>
              {/* <Text style={styles.errorMessage}>{errorMessage}</Text> */}
              <TextInput
                onChangeText={setPassword}
                value={password ? password.toString() : ""}
                placeholder=""
                keyboardType="default"
                style={styles.input}
                onFocus={onFocusPassword}
                onBlur={onBlurPassword}
                ref={passwordInputRef}
              ></TextInput>
            </View>
          </View>
          <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
        </View>

        <View style={styles.containerInfoAndButton}>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => validationImg()}>
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.textYouDontHaveAccount}>
            Você não tem uma conta?{" "}
            <Text style={styles.textBlueLink} onPress={() => navigation.navigate("SignUp", undefined)}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
