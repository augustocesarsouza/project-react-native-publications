import { Animated, Image, Keyboard, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { RootStackParamList } from "@/app/_layout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../../interface/domain/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

enum AllTheInputs {
  InputName = "inputName",
  InputEmail = "inputEmail",
  InputPassword = "inputPassword",
}

interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignUp">;
}

export default function SignUp({ navigation }: SignUpProps) {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const nameInputRef = useRef<TextInput | null>(null);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const nameTextRef = useRef<Text | null>(null);
  const emailTextRef = useRef<Text | null>(null);
  const passwordTextRef = useRef<Text | null>(null);

  const labelTopName = useState(new Animated.Value(23))[0];
  const labelFontSizeName = useState(new Animated.Value(16))[0];

  const labelTopEmail = useState(new Animated.Value(23))[0];
  const labelFontSizeEmail = useState(new Animated.Value(16))[0];

  const labelTopPassword = useState(new Animated.Value(23))[0];
  const labelFontSizePassword = useState(new Animated.Value(16))[0];

  const onFocusAll = (label: Animated.Value, labelFontSize: Animated.Value) => {
    Animated.timing(label, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSize, {
      toValue: 14,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onBlurAll = (label: Animated.Value, labelFontSize: Animated.Value, whichInput: AllTheInputs) => {
    let canActivate = false;

    if (whichInput === AllTheInputs.InputName) {
      if (name) {
        canActivate = true;
      }
    }

    if (whichInput === AllTheInputs.InputEmail) {
      if (email) {
        canActivate = true;
      }
    }

    if (whichInput === AllTheInputs.InputPassword) {
      if (password) {
        canActivate = true;
      }
    }

    if (!canActivate) {
      Animated.timing(label, {
        toValue: 23,
        duration: 150,
        useNativeDriver: false,
      }).start();

      Animated.timing(labelFontSize, {
        toValue: 16,
        duration: 150,
        useNativeDriver: false,
      }).start();

      canActivate = false;
    }
  };

  const handleLabelPress = (nameInputRef: React.MutableRefObject<TextInput | null>) => {
    const input = nameInputRef.current as TextInput;
    input.focus();
  };

  const [errorNameIsNull, setErrorNameIsNull] = useState(false);
  const [errorEmailIsNull, setErrorEmailIsNull] = useState(false);
  const [errorPasswordIsNull, setErrorPasswordIsNull] = useState(false);

  const signUp = () => {
    let nameIsValid = false;
    let emailIsValid = false;
    let passwordIsValid = false;

    if (!name) {
      setErrorNameIsNull(true);

      putValueInputAndText(nameInputRef, nameTextRef, "red");
      nameIsValid = false;
    } else {
      nameIsValid = true;
    }

    if (!email) {
      setErrorEmailIsNull(true);

      putValueInputAndText(emailInputRef, emailTextRef, "red");
      emailIsValid = false;
    } else {
      emailIsValid = true;
    }

    if (!password) {
      setErrorPasswordIsNull(true);

      putValueInputAndText(passwordInputRef, passwordTextRef, "red");
      passwordIsValid = false;
    } else {
      passwordIsValid = true;
    }
    // ARRUMAR ISSO TER QUE TER MAIS DE "3" CARACTER NO NAME, O EMAIL TER "@" E A SENHA TER PELOMENOS 8 CARACTEER
    // AMANHA COLOCAR O BACKEND NO GITHUB COLOCAR LÁ E VERIFICAR O src/main/resources/application-local.properties tem que funciona

    if (nameIsValid && emailIsValid && passwordIsValid) {
      const obj = {
        name,
        email,
        password,
        base64ImageUser: null,
      };

      fetch("http://192.168.18.21:8080/v1/public/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          const result = data;
          const user = result.data;

          putUserStorage(user);

          navigation.navigate("Home");
        })
        .catch((err) => console.error(err));
    }
  };

  const putUserStorage = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      console.log("Usuário salvo!");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  useEffect(() => {
    if (name) {
      setErrorNameIsNull(false);

      putValueInputAndText(nameInputRef, nameTextRef, "#979797");
    }

    if (email) {
      setErrorEmailIsNull(false);

      putValueInputAndText(emailInputRef, emailTextRef, "#979797");
    }

    if (password) {
      setErrorPasswordIsNull(false);

      putValueInputAndText(passwordInputRef, passwordTextRef, "#979797");
    }
  }, [name, email, password]);

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

  const [showEyeOpen, setShowEyeOpen] = useState(true);

  const onPressEyeOpen = () => {
    setShowEyeOpen(false);
  };

  const onPressEyeClose = () => {
    setShowEyeOpen(true);
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.containerMain}>
      <View style={styles.container}>
        <View style={styles.containerImgLogoAndText}>
          <Image source={require("../../img/logo.png")} style={styles.reactLogo} />

          <Text style={styles.textPublic}>Cadastrar</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.containerTextAndInputEmailAndPassword}>
            <Animated.Text
              style={[styles.labelNameEmailPassword, { top: labelTopName, fontSize: labelFontSizeName }]}
              onPress={() => handleLabelPress(nameInputRef)}
              ref={nameTextRef}
            >
              Name
            </Animated.Text>

            <TextInput
              onChangeText={setName}
              value={name ? name.toString() : ""}
              placeholder=""
              style={styles.input}
              onFocus={() => onFocusAll(labelTopName, labelFontSizeName)}
              onBlur={() => onBlurAll(labelTopName, labelFontSizeName, AllTheInputs.InputName)}
              ref={nameInputRef}
            />
            {errorNameIsNull && (
              <Text style={styles.textErrorMessage}>Nome do usuario não pode ser vazio</Text>
            )}
          </View>
          <View style={styles.containerTextAndInputEmailAndPassword}>
            <Animated.Text
              style={[styles.labelNameEmailPassword, { top: labelTopEmail, fontSize: labelFontSizeEmail }]}
              onPress={() => handleLabelPress(emailInputRef)}
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
              onFocus={() => onFocusAll(labelTopEmail, labelFontSizeEmail)}
              onBlur={() => onBlurAll(labelTopEmail, labelFontSizeEmail, AllTheInputs.InputEmail)}
              ref={emailInputRef}
            ></TextInput>
            {errorEmailIsNull && (
              <Text style={styles.textErrorMessage}>Email do usuario não pode ser vazio</Text>
            )}
          </View>
          <View style={styles.containerTextAndInputEmailAndPassword}>
            <Animated.Text
              style={[
                styles.labelNameEmailPassword,
                { top: labelTopPassword, fontSize: labelFontSizePassword },
              ]}
              onPress={() => handleLabelPress(passwordInputRef)}
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
                onFocus={() => onFocusAll(labelTopPassword, labelFontSizePassword)}
                onBlur={() => onBlurAll(labelTopPassword, labelFontSizePassword, AllTheInputs.InputPassword)}
                ref={passwordInputRef}
              />

              {showEyeOpen && (
                <FontAwesome
                  name="eye"
                  size={20}
                  color="black"
                  style={styles.containerEyeOpen}
                  onPress={onPressEyeOpen}
                />
              )}

              {!showEyeOpen && (
                <FontAwesome
                  name="eye-slash"
                  size={20}
                  color="black"
                  style={styles.containerEyeClose}
                  onPress={onPressEyeClose}
                />
              )}
            </View>
            {errorPasswordIsNull && (
              <Text style={styles.textErrorMessage}>Password do usuario não pode ser vazio</Text>
            )}
          </View>
        </View>

        <View style={styles.containerButtonLoginOrSignUp}>
          <TouchableOpacity style={styles.buttonSignUp} onPress={signUp}>
            <Text style={styles.textButtonSignUp}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.textAlreadyHaveAccount}>
            Já tem um conta?{" "}
            <Text style={styles.textLogin} onPress={onPressLogin}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
