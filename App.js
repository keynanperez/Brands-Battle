import React from 'react';
import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import AppNavigator from './src/navigations/Navigator';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      
    return (   <PaperProvider >
      <AppNavigator />
    </PaperProvider>);
  }
}

registerRootComponent(App);



