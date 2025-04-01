import { Animated, Keyboard, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { User } from "../../interface/domain/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const emailTextRef = useRef<Text | null>(null);
  const passwordTextRef = useRef<TextInput | null>(null);

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
    if (!email) {
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
    }
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

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [alreadyClickLogin, setAlreadyClickLogin] = useState(false);

  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);

  const onPressLogin = async () => {
    setPasswordIsCorrect(true);
    setAlreadyClickLogin(true);

    let emailErrorHere = true;
    let passwordErrorHere = true;

    if (!email) {
      emailErrorHere = true;
      putValueInputAndText(emailInputRef, emailTextRef, "red");
    } else {
      if (!email.includes("@gmail")) {
        emailErrorHere = true;
        putValueInputAndText(emailInputRef, emailTextRef, "red");
      } else {
        emailErrorHere = false;
        putValueInputAndText(emailInputRef, emailTextRef, "#979797");
      }
    }

    setEmailError(emailErrorHere);

    if (!password) {
      passwordErrorHere = true;
      putValueInputAndText(passwordInputRef, passwordTextRef, "red");
    } else {
      if (password.length < 8) {
        passwordErrorHere = true;
        putValueInputAndText(passwordInputRef, passwordTextRef, "red");
      } else {
        passwordErrorHere = false;
        putValueInputAndText(passwordInputRef, passwordTextRef, "#979797");
      }
    }

    setPasswordError(passwordErrorHere);

    if (!emailErrorHere && !passwordErrorHere) {
      if (!emailErrorHere) {
        fetch(`http://192.168.18.21:8080/v1/public/user/login/${email}/${password}`)
          .then(async (res) => {
            if (res.status === 400) {
              const result = await res.json();
              const data = result.data;
              setPasswordIsCorrect(data.passwordIsCorrect);
            }

            if (res.status === 200) {
              setPasswordIsCorrect(true);
              const data = await res.json();

              const result = data;

              const resultFinal = result.data;
              const user = resultFinal["userDTO"];
              putUserStorage(user);
              navigation.navigate("Home");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  const putUserStorage = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));

      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  const putValueInputAndText = (
    input: React.MutableRefObject<TextInput | null>,
    text: React.MutableRefObject<Text | null>,
    color: string,
  ) => {
    const inputInner = input.current as TextInput;
    inputInner.setNativeProps({
      style: { borderColor: color },
    });

    const textInner = text.current as Text;
    textInner.setNativeProps({
      style: { color: color },
    });
  };

  useEffect(() => {
    setPasswordIsCorrect(true);
    if (!alreadyClickLogin) return;

    let emailErrorHere = true;
    let passwordErrorHere = true;

    if (!email) {
      emailErrorHere = true;
      putValueInputAndText(emailInputRef, emailTextRef, "red");
    } else {
      if (!email.includes("@gmail")) {
        emailErrorHere = true;
        putValueInputAndText(emailInputRef, emailTextRef, "red");
      } else {
        emailErrorHere = false;
        putValueInputAndText(emailInputRef, emailTextRef, "#979797");
      }
    }

    setEmailError(emailErrorHere);

    if (!password) {
      passwordErrorHere = true;
      putValueInputAndText(passwordInputRef, passwordTextRef, "red");
    } else {
      if (password.length < 8) {
        passwordErrorHere = true;
        putValueInputAndText(passwordInputRef, passwordTextRef, "red");
      } else {
        passwordErrorHere = false;
        putValueInputAndText(passwordInputRef, passwordTextRef, "#979797");
      }
    }

    setPasswordError(passwordErrorHere);
  }, [alreadyClickLogin, email, password]);

  const [showEyeOpen, setShowEyeOpen] = useState(true);

  const onPressEyeOpen = () => {
    setShowEyeOpen(false);
  };

  const onPressEyeClose = () => {
    setShowEyeOpen(true);
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.containerMain}>
      <View style={styles.container}>
        <FontAwesome
          name="arrow-left"
          size={15}
          color="black"
          style={styles.containerArrowLeft}
          onPress={() => navigation.navigate("LoginAndSignUp", undefined)}
        />
        <View style={styles.containerIconUserAndTextLogin}>
          <FontAwesome name="user-circle" size={75} color="black" />
          <Text style={styles.headerLogin}>Login</Text>

          {!passwordIsCorrect && (
            <Text style={styles.textEmailOrPasswordIncorrect}>Email ou Senha Incorreta</Text>
          )}
        </View>

        <View style={styles.formMain}>
          <View style={styles.form}>
            <View style={styles.containerTextAndInputEmailAndPassword}>
              <Animated.Text
                style={[styles.labelEmail, { top: labelTopEmail, fontSize: labelFontSizeEmail }]}
                onPress={handleLabelPress}
                ref={emailTextRef}
              >
                Email
              </Animated.Text>

              <TextInput
                onChangeText={setEmail}
                value={email ? email.toString() : ""}
                placeholder=""
                keyboardType="email-address"
                style={styles.input}
                onFocus={onFocusEmail}
                onBlur={onBlurEmail}
                ref={emailInputRef}
              />
              {emailError && <Text style={styles.errorMessage}>O Email tem que conter "@gmail"</Text>}
            </View>
            <View style={styles.containerTextAndInputEmailAndPassword}>
              <Animated.Text
                style={[styles.labelPassword, { top: labelTopPassword, fontSize: labelFontSizePassword }]}
                onPress={handleLabelPressPassword}
                ref={passwordTextRef}
              >
                Senha
              </Animated.Text>
              <View style={styles.containerInputPasswordAndEyes}>
                <TextInput
                  onChangeText={setPassword}
                  value={password ? password.toString() : ""}
                  placeholder=""
                  keyboardType="default"
                  secureTextEntry={showEyeOpen}
                  style={styles.input}
                  onFocus={onFocusPassword}
                  onBlur={onBlurPassword}
                  ref={passwordInputRef}
                />

                {showEyeOpen && (
                  <FontAwesome
                    name="eye"
                    size={20}
                    color="black"
                    style={styles.containerEyeOpenClose}
                    onPress={onPressEyeOpen}
                  />
                )}

                {!showEyeOpen && (
                  <FontAwesome
                    name="eye-slash"
                    size={20}
                    color="black"
                    style={styles.containerEyeOpenClose}
                    onPress={onPressEyeClose}
                  />
                )}
              </View>
              {passwordError && (
                <Text style={styles.errorMessage}>Senha deve ter pelo menos 8 caracteres</Text>
              )}
            </View>
          </View>
          <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
        </View>

        <View style={styles.containerInfoAndButton}>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => onPressLogin()}>
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
