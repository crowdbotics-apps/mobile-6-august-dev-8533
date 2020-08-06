import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen09690Navigator from '../features/BlankScreen09690/navigator';
import BlankScreen29682Navigator from '../features/BlankScreen29682/navigator';
import BlankScreen19681Navigator from '../features/BlankScreen19681/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen09690: { screen: BlankScreen09690Navigator },
BlankScreen29682: { screen: BlankScreen29682Navigator },
BlankScreen19681: { screen: BlankScreen19681Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
