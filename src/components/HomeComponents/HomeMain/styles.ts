import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative"
  },

  containerHeaderPublicaton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom: 20
  },

  textName: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
  },

  imgUser: {
    width: 25,
    height: 25
  },

  containerNavigationPublication: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderBottomColor: "#e5e5e53d"
  },

  textNavPublic: {
    color: "#a9a9a9",
    textAlign: "center",
    width: "25%",
    paddingBottom: 7
  },

  textExit: {
    fontSize: 12,
    color: "red"
  },

  containerClickedByUserFirst: {
    position: "absolute",
    left: 0,
    top: 0,
    // width: "80%",
    width: "0%",
    height: "100%",
    zIndex: 1000,
    backgroundColor: "red"
  },

  textInnerClickedByUser: {
    color: "#ffffff",
  },

  containerClickedByUserSecond: {
    position: "absolute",
    right: 0,
    top: 0,
    // width: "20%",
    width: "0%",
    height: "100%",
    zIndex: 1000,
    backgroundColor: "transparent"
  },

  containerPressableClickedByUser: {
    width: "100%",
    height: "100%"
  }
});