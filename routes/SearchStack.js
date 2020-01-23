import { createStackNavigator } from 'react-navigation-stack';
import Search from '../pages/Search';

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    defaultNavigationOptions: {
      title: 'Busca',
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#efefef'
      }
    },
    initialRouteKey: 'Search',
    navigationOptions: {
      tabBarLabel: 'Busca'
    }
  }
);

export default SearchStack;
