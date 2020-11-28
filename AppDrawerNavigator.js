import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import {Image} from 'react-native'; 
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            title: 'HOME ACTIVITY',
        },
},
Settings: {
    screen: SettingsScreen,
    navigationOptions: {
        title: 'SETTINGS',
    },
}
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: "Home ",
}
)