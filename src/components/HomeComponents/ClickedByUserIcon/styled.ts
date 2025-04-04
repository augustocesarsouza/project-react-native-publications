import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerClickedByUserFirst: {
    position: 'absolute',
    left: 0,
    top: 0,
    // width: "80%",
    width: '0%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: '#000',
    paddingTop: 30,
    paddingLeft: 20,
  },

  containerImgUserAndName: {
    width: '80%',
    marginBottom: 20,
  },

  containerImgNameAndDellipsis: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imgUserAfterClicked: {
    width: 35,
    height: 35,
    objectFit: 'contain',
    borderRadius: 50,
    marginBottom: 5,
  },

  containerSvgEllipsis: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInnerClickedByUser: {
    color: '#ffffff',
    fontWeight: '800',
  },

  containerNaveAfterClickedImgUser: {
    // marginTop: 20,
    // marginLeft: 10,
    gap: 18,
  },

  containerSvgAndTextNave: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textNaveAfterClicked: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  svgNave: {
    marginRight: 18,
  },

  containerClickedByUserSecond: {
    position: 'absolute',
    right: 0,
    top: 0,
    // width: "20%",
    width: '0%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: 'transparent',
  },

  containerPressableClickedByUser: {
    width: '100%',
    height: '100%',
  },
});
