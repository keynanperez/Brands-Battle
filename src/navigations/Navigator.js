/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginView from '../../src/Screens/LoginView'
import gameView from '../../src/Screens/gameView';
import Quiz from '../../src/Screens/Quiz';
import CategoriesPage from '../../src/Screens/CategoriesPage';
import UserDashboard from "../Screens/UserDashboard";
import ResetPasswordScreen from "../../src/Screens/ResetPasswordScreen";
import RegisterScreen from "../../src/Screens/RegisterScreen";
import nextlevel from '../../src/Screens/nextlevel';
import WinnerPage from "../../src/Screens/WinnerPage";
import NewUser from '../../src/Screens/NewUser';
import UserHome from '../../src/Screens/UserHome';
import Marketing from "../../src/Screens/MarketingPage";
import endgame from "../../src/Screens/endgame";
//import MarketingHome from "../screens/MarketingHome";

const stackNavigatorOptions = {
    headerShown: false,
};
const AppNavigator = createStackNavigator(
    {
         
       
        login : { screen: LoginView },
        gameView: { screen: gameView },
        Categories: { screen:CategoriesPage },
        Quiz: { screen: Quiz },
        UserHome: { screen: UserHome },
        UserDashboard: { screen: UserDashboard },
        ResetPasswordScreen: { screen: ResetPasswordScreen },
        RegisterScreen: { screen: RegisterScreen },
        newuser: { screen: NewUser },
        endgame: { screen: endgame },
        nextlevel: { screen: nextlevel },
        WinnerPage: { screen: WinnerPage },
        Marketing: { screen : Marketing },


    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);
export default createAppContainer(AppNavigator);
