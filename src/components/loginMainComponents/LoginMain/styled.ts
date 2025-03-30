import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },

  containerArrowLeft: {
    width: "100%",
    marginTop: 20,
    marginBottom: 100
  },

  container: {
    alignItems: "center",
    width: "75%",
    height: "70%",
    justifyContent: "flex-start",
  },

  containerIconUserAndTextLogin: {
    gap: 20,
    marginBottom: 20,
  },

  headerLogin: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
  },

  formMain: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30
  },

  form: {
    width: "100%",
    height: "auto",
    gap: 5
  },

  containerTextAndInputEmailAndPassword: {
    width: "100%",
    height: "auto",
    padding: 10,
    position: "relative"
  },

  labelEmail: {
    color: "#000000",
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

  labelPassword: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    left: 20,
    top: 84,
    backgroundColor: "#fff",
    zIndex: 5,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5
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

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 7
  },

  containerInfoAndButton: {
    width: "100%",
    alignItems: "center",
  },

  textForgotPassword: {
    width: "100%",
    fontWeight: "500",
    textAlign: "right",
    paddingRight: 10
  },

  buttonLogin: {
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#318CE7",
    padding: 10,
    marginBottom: 15
  },

  textButtonLogin: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  
  textYouDontHaveAccount: {
    textAlign: "center",
    fontWeight: "500"
  },
  
  textBlueLink: {
    color: "#318CE7"
  },
});
