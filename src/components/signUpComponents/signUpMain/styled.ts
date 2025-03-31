import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  container: {
    alignItems: "center",
    width: "75%",
    height: "80%",
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

  form: {
    width: "100%",
    height: "auto",
    gap: 0,
    marginBottom: 25
  },

  containerTextAndInputEmailAndPassword: {
    width: "100%",
    height: "auto",
    padding: 10,
    position: "relative"
  },

  labelNameEmailPassword: {
    color: "#979797",
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    left: 25,
    top: 23,
    backgroundColor: "#fff",
    zIndex: 5,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5
  },

  containerInputPasswordAndEyes: {
    width: "100%",
    position: "relative",
  },

  containerEyeOpen: {
    width: 20,
    position: "absolute",
    right: 15,
    bottom: 15
  },

  containerEyeClose: {
    width: 20,
    position: "absolute",
    right: 15,
    bottom: 15
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    paddingLeft: 15
  },

  containerButtonLoginOrSignUp: {
    width: "100%",
    gap: 10
  },

  buttonSignUp: {
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#318CE7",
    padding: 10,
  },

  textButtonSignUp: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
  },

  textAlreadyHaveAccount: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },

  textLogin: {
    color: "#600ee6"
  },

  textErrorMessage: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  }
});