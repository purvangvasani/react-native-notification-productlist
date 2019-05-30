/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NotificationScreen from './src/screens/NotificationScreen'
import ProductList from './src/screens/ProductList'

const TabNavigator = createBottomTabNavigator(
  {
    Notifications: NotificationScreen,
    ProductList: ProductList
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Notifications') {
          iconName = `ios-notifications`;
        } else if (routeName === 'ProductList') {
          iconName = `ios-keypad`;
        } else if (routeName === 'Home') {
          iconName = 'ios-home';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle :{
          fontSize: 14,
      }
    },
  }
);

export default createAppContainer(TabNavigator);

