import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "./styled";

export default function LoginMain() {
  return (
    <View style={styles.containerMain}>
      <Image source={require("../../img/user-body.png")} style={styles.reactLogo} />
      <Text style={styles.headerLogin}>Login</Text>
    </View>
  );
}
