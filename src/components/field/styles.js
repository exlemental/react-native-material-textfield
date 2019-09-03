import { StyleSheet,I18nManager } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
  },

  input: {
    top: 2,
    padding: 0,
    margin: 0,
    flex: 1,
    marginRight:I18nManager.isRTL ? 8 : 0
  },

  row: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
  },

  flex: {
    flex: 1,
  },

  accessory: {
    top: 2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
