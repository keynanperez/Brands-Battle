import React from 'react';
import Loading  from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeView from './src/Screens/HomeView';
import LoginView from './src/Screens/LoginView'
import gameView from './src/Screens/gameView';
import mypro from "./src/Screens/MyPageView";
import nextlevel from './src/Screens/nextlevel';
import WinnerPage from "./src/Screens/WinnerPage";
import NewUser from './src/Screens/NewUser';
import { I18nManager } from "react-native";
import endgame from "./src/Screens/endgame";
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DocReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ DocReady: true });
  }

  render() {
    if (!this.state.DocReady) {
      return <Loading />;
    }
    return (
      <NavigationContainer>
       <Drawer.Navigator  initialRouteName='Home'>
       <Drawer.Screen name="Home" component={HomeView}  />
       <Drawer.Screen name="login" component={LoginView} />
       <Drawer.Screen name="gameView" component={gameView} />
       <Drawer.Screen name="mypro" component={mypro} />
       <Drawer.Screen name="newuser" component={NewUser} />
       <Drawer.Screen name="endgame" component={endgame} />
       <Drawer.Screen name="nextlevel" component={nextlevel}/>
       <Drawer.Screen name="WinnerPage" component={WinnerPage}/>
         </Drawer.Navigator >
      </NavigationContainer>
    );
  }
}

const Drawer = createDrawerNavigator();

