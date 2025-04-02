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
    height: 25,
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
    backgroundColor: "#000",
    paddingTop: 30,
    paddingLeft: 20,
  },

  containerImgNameAndDellipsis: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },

  containerImgUserAndName: {
    width: "80%",
    marginBottom: 20
  },

  imgUserAfterClicked: {
    width: 35,
    height: 35,
    objectFit: "contain",
    borderRadius: 50,
    marginBottom: 5
  },

  textInnerClickedByUser: {
    color: "#ffffff",
    fontWeight: "800"
  },

  containerSvgEllipsis: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  containerNaveAfterClickedImgUser: {
    // marginTop: 20,
    // marginLeft: 10,
    gap: 18
  },

  containerSvgAndTextNave: {
    flexDirection: "row",
    alignItems: "center"
  },

  svgNave: {
    marginRight: 18
  },

  textNaveAfterClicked: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
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