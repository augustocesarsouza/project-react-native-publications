import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
  },

  containerHeaderPublicaton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom: 20,
  },

  textName: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  imgUser: {
    width: 25,
    height: 25,
  },

  containerNavigationPublication: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderBottomColor: '#e5e5e53d',
  },

  textNavPublic: {
    color: '#a9a9a9',
    textAlign: 'center',
    width: '25%',
    paddingBottom: 7,
  },

  containerFooterIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    marginTop: 20,
    borderWidth: 1,
    borderTopColor: '#d9d9d91f',
  },

  svgHome: {
    paddingTop: 10,
  },

  containerCreatePublication: {
    width: 56,
    height: 56,
    backgroundColor: '#1d9bf0',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 20,
  },

  textExit: {
    fontSize: 12,
    color: 'red',
  },
});
