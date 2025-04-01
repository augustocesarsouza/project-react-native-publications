import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%"
  },

  container: {
    alignItems: "center",
    width: "75%",
    height: "70%",
    justifyContent: "flex-start",
  },

  containerImgLogoAndText: {
    width: "100%",
    alignItems: "center",
    gap: 15,
    marginBottom: 20
  },

  reactLogo: {
    height: 120,
    width: 120,
  },

  textPublic: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#600ee6"
  },

  containerTextLogin: {
    width: "100%",
    marginBottom: 25
  },
  
  textLoginOrRegister: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },

  containerButtonLoginOrSignUp: {
    width: "100%",
    gap: 20
  },

  buttonLogin: {
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#318CE7",
    padding: 10,
  },

  textButtonLogin: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
  },

  buttonSignUp: {
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#00000038",
    borderWidth: 1, // Define a largura da borda
  },

  textButtonRegister: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    textTransform: "uppercase"
  },

});