import { createStackNavigator } from 'react-navigation-stack';

import History from '../pages/History';

const HistoryStack = createStackNavigator(
  {
    History: History
  },
  {
    defaultNavigationOptions: {
      title: 'Histórico',
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#efefef'
      }
    },
    navigationOptions: {
      tabBarLabel: 'Histórico'
    }
  }
);

export default HistoryStack;
