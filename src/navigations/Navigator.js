/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeView from '../../src/Screens/HomeView';
import LoginView from '../../src/Screens/LoginView'
import gameView from '../../src/Screens/gameView';
import Quiz from '../../src/Screens/Quiz';
import CategoriesPage from '../../src/Screens/CategoriesPage';
import mypro from "../../src/Screens/MyPageView";
import nextlevel from '../../src/Screens/nextlevel';
import WinnerPage from "../../src/Screens/WinnerPage";
import NewUser from '../../src/Screens/NewUser';
import UserHome from '../../src/Screens/UserHome';

import endgame from "../../src/Screens/endgame";
//import MarketingHome from "../screens/MarketingHome";

const stackNavigatorOptions = {
    headerShown: false,
};
const AppNavigator = createStackNavigator(
    {
         
        Home: { screen: HomeView },
        login : { screen: LoginView },
        gameView: { screen: gameView },
        Categories: { screen:CategoriesPage },
        Quiz: { screen: Quiz },
        UserHome: { screen: UserHome },
        mypro: { screen: mypro },
        newuser: { screen: NewUser },
        endgame: { screen: endgame },
        nextlevel: { screen: nextlevel },
        WinnerPage: { screen: WinnerPage },


    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);
export default createAppContainer(AppNavigator);
