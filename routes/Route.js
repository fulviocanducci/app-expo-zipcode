import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon } from '../components';

import SearchStack from './SearchStack';
import HistoryStack from './HistoryStack';

const Routes = { SearchStack, HistoryStack };

const defaultNavigationOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = '';
      switch (routeName) {
        case 'SearchStack': {
          iconName = 'search';
          break;
        }
        case 'HistoryStack': {
          iconName = 'history';
          break;
        }
        default: {
          iconName = '';
        }
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    }
  })
};

export default createAppContainer(
  createBottomTabNavigator(Routes, defaultNavigationOptions)
);
