import {
  Animated,
  Image,
  Keyboard,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function LoginMain() {
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
    <View style={styles.containerMain}>
      <View style={styles.containerIconUserAndTextLogin}>
        <FontAwesome name="user-circle" size={75} color="black" />
        <Text style={styles.headerLogin}>Login</Text>
      </View>

      <Pressable onPress={Keyboard.dismiss} style={styles.formMain}>
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
      </Pressable>

      <View style={styles.containerInfoAndButton}>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => validationImg()}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.textYouDontHaveAccount}>
          Você não tem uma conta? <Text style={styles.textBlueLink}>Register</Text>
        </Text>
      </View>
    </View>
  );
}
