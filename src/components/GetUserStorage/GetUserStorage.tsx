import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../interface/domain/User";

export const getUser = async (): Promise<User | null> => {
  try {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      return user as User;
    }
    return null;
  } catch (error) {
    return null;
  }
};
