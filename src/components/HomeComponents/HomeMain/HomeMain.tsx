import { Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { User } from "../../interface/domain/User";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../../GetUserStorage/GetUserStorage";

interface HomeMainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export default function HomeMain({ navigation }: HomeMainProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();

      if (userData) {
        setUser(userData);
      }
    };

    fetchUser();
  }, []);

  const onPressExitUser = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);

    navigation.navigate("Login");
  };

  return (
    <View style={styles.containerMain}>
      <Text>Publicações</Text>

      {user && <Text style={styles.textName}>{user.name}</Text>}
      <Text onPress={onPressExitUser}>Sair</Text>
    </View>
  );
}
