/*
 * platform/application wide metrics for proper styling
 */

import {Platform, StatusBar, Dimensions} from 'react-native';
// import {hasNotch} from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const platform = Platform.OS;
const metrics = {
  width,
  height,
  aspectRatio: width / height,
  isLandscape: width > height,
  topPadding: Platform.OS === 'ios' ? 34 : 0,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
  statusBarHeight:
    // Platform.OS === 'ios' ? (hasNotch() ? 30 : 10) : StatusBar.currentHeight,
    Platform.OS === 'ios' ? 34 : StatusBar.currentHeight,
};

export default metrics;
