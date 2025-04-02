import { Animated, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useRef, useState } from "react";
import { User } from "../../interface/domain/User";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { getUser } from "../../GetUserStorage/GetUserStorage";
import { FontAwesome } from "@expo/vector-icons";
import SvgProfile from "../../AllSvgs/SvgProfile";
import SvgPremium from "../../AllSvgs/SvgPremium";
import SvgLists from "../../AllSvgs/SvgLists";
import SvgSavedItems from "../../AllSvgs/SvgSavedItems";
import Svglightning from "../../AllSvgs/Svglightning";
import SvgCoin from "../../AllSvgs/SvgCoin";
import SvgAds from "../../AllSvgs/SvgAds";
import SvgBriefcase from "../../AllSvgs/SvgBriefcase";
import SvgConfiguration from "../../AllSvgs/SvgConfiguration";
import SvgExit from "../../AllSvgs/SvgExit";

interface HomeMainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export default function HomeMain({ navigation }: HomeMainProps) {
  const [user, setUser] = useState<User | null>(null);

  const textRefs = useRef<(Text | null)[]>([]);
  const textList = ["Para você", "Seguindo", "Roach Ranch"];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();

      if (userData) {
        setUser(userData);
      }
    };

    fetchUser();

    timeoutRef.current = setTimeout(() => {
      textRefs.current[0]?.setNativeProps({
        style: {
          color: "#fff",
          borderBottomWidth: 3,
          borderBottomColor: "#229cee",
        },
      });
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onPressExitUser = async () => {
    // await AsyncStorage.removeItem("user");
    // setUser(null);
    // navigation.navigate("Login");
  };

  const onPressText = (index: number) => {
    textRefs.current.forEach((el) => {
      el?.setNativeProps({
        style: {
          color: "#a9a9a9",
          borderBottomWidth: 0,
          borderBottomColor: "#229cee0",
        },
      });
    });

    textRefs.current[index]?.setNativeProps({
      style: {
        color: "#fff",
        borderBottomWidth: 3,
        borderBottomColor: "#229cee",
      },
    });
  };

  const containerClickedByUserFirstRef = useRef<View | null>(null);
  const containerClickedByUserSecondRef = useRef<View | null>(null);

  const containerFirstWidth = useState(new Animated.Value(0))[0];
  const [wasClickedUser, setWasClickedUser] = useState(false);

  const onPressClickUser = () => {
    setWasClickedUser(true);

    Animated.timing(containerFirstWidth, {
      toValue: 80,
      duration: 300,
      useNativeDriver: false,
    }).start();

    const containerSecond = containerClickedByUserSecondRef.current as View;

    containerSecond.setNativeProps({
      style: {
        width: "20%",
      },
    });
  };

  const onPressCloseClickUser = () => {
    Animated.timing(containerFirstWidth, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setWasClickedUser(false));

    const containerSecond = containerClickedByUserSecondRef.current as View;

    containerSecond.setNativeProps({
      style: {
        width: "0%",
      },
    });
  };

  return (
    <Pressable style={styles.containerMain}>
      {user && (
        <>
          <View style={styles.containerHeaderPublicaton}>
            <View>
              {!user.userImage && (
                <FontAwesome name="user-circle" size={25} color="white" onPress={onPressClickUser} />
              )}
              {user.userImage && <Image source={{ uri: user.userImage }} style={styles.imgUser} />}
            </View>
            <Image source={require("../../img/img-twitter.png")} style={styles.imgUser} />
            <FontAwesome name="ellipsis-v" size={25} color="white" />
          </View>
          <View style={styles.containerNavigationPublication}>
            {textList.map((text, index) => (
              <Text
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                onPress={() => onPressText(index)}
                style={styles.textNavPublic}
              >
                {text}
              </Text>
            ))}
          </View>

          <Text onPress={onPressExitUser} style={styles.textExit}>
            Sair
          </Text>

          {wasClickedUser && (
            <Animated.View
              style={[
                styles.containerClickedByUserFirst,
                {
                  width: containerFirstWidth.interpolate({
                    inputRange: [0, 80],
                    outputRange: ["0%", "80%"],
                  }),
                },
              ]}
              ref={containerClickedByUserFirstRef}
            >
              <View style={styles.containerImgUserAndName}>
                <View style={styles.containerImgNameAndDellipsis}>
                  <View>
                    {!user.userImage && (
                      <Image
                        source={require("../../img/img-after-clicked-img-user.png")}
                        style={styles.imgUserAfterClicked}
                      />
                    )}
                    {user.userImage && (
                      <Image source={{ uri: user.userImage }} style={styles.imgUserAfterClicked} />
                    )}
                  </View>
                  <View style={styles.containerSvgEllipsis}>
                    <FontAwesome name="ellipsis-v" size={12} color="white" />
                  </View>
                </View>

                <Text style={styles.textInnerClickedByUser}>{user.name}</Text>
              </View>

              <View style={styles.containerNaveAfterClickedImgUser}>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgProfile width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Perfil</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgPremium width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Premium</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgLists width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Listas</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgSavedItems width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Itens salvos</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <Svglightning width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Organizações Verificadas</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgCoin width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Monetização</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgAds width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Ads</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgBriefcase width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Empregos</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgConfiguration width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Configurações e privacidade</Text>
                </View>
                <View style={styles.containerSvgAndTextNave}>
                  <SvgExit width={22} height={22} fill="#fff" style={styles.svgNave} />
                  <Text style={styles.textNaveAfterClicked}>Sair</Text>
                </View>
              </View>
            </Animated.View>
          )}
          <View style={styles.containerClickedByUserSecond} ref={containerClickedByUserSecondRef}>
            <Pressable
              style={styles.containerPressableClickedByUser}
              onPress={() => onPressCloseClickUser()}
            ></Pressable>
          </View>
        </>
      )}
    </Pressable>
  );
}
