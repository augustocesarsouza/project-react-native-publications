import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    alignItems: "center",
    width: "100%"
  },

  containerIconBodyUser: {
    width: "100%",
    alignItems: "center",
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
    position: "relative"
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  labelEmail: {
    color: "#000000",
    // fontSize: 14,
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    left: 25,
    // top: 0,
    top: 23,
    backgroundColor: "#fff",
    // backgroundColor: "red",
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
    left: 25,
    // top: 60,
    top: 84,
    backgroundColor: "#fff",
    // backgroundColor: "red",
    zIndex: 5,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5
  },
  
  input: {
    width: "100%", // Faz os inputs ocuparem toda a largura
    height: 50, // Altura fixa para os inputs
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 7
  },

  buttonLogin: {
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    width: "70%",
    backgroundColor: "red",
    padding: 10,
  },

  textButtonLogin: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
});
