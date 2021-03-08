import {StyleSheet} from 'react-native';

const AppStyles = {
  colors: {
    e: '#EEEEEE',
    _41: '#414141',
    white: 'white',
    black: '#000000',
    darkerGrey: '#656565',
    secondaryColor: '#EF7836',
    primaryBlander: '#C6B4ED',
  },
  fonts: {},
  rows: StyleSheet.create({
    row_sb: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    row_fs: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    row_fe: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    row_center: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row_se: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    row_sa: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    row_sb_fs: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    row_center_fs: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  }),
};

export default AppStyles;
