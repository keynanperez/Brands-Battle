import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
//import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { Item, Text } from 'native-base';
import { theme } from '../core/theme'
import { ThemeContext ,navigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ThemeConsumer } from 'react-native-elements';
import myUrl from "./Url";
import * as Localization from 'expo-localization'
import color from 'color'
export default  class  LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserMail:"hodaya@gmail.com",
      UserName:"",
      UserPass:"2021",
      UserId:"",
      pointsU:0,

    };
  }

  SubmitNote = async() =>{
 let  Mail=this.state.UserMail;
 let pass=this.state.UserPass ;
  if((Mail === '')||(pass === ''))
   {
        alert("Please insert info!")
    }
    else{
     // this.props.navigation.navigate('UserHome',{UserId:this.state.UserId,pointsU:this.state.pointsU,stageU:this.state.stageU,UserName:this.state.UserName,imgU:this.state.imgU});
    
     const url = `http://10.0.0.25:44300/api/Users`
      const userf =await fetch(url, {
          method: 'Put',
          body:   JSON.stringify([Mail, pass]),
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
          })
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
        const res= await userf.json()
          if(res.UserName != null)
            {
             this.props.navigation.navigate('UserHome',{UserId:res.Id,UserPoints:res.Points,UserName:res.UserName});
           };
          
    
    }
    
  }


  render()
  {

   return (
     <Background>
       <Logo />
       <Header>Welcome back.</Header>
       <TextInput  onChangeText={Info=> this.setState({UserMail: Info})} 
       label="Email" value="Keynan@gmail.com" style={styles.forgot}  />
       <TextInput  onChangeText={Info=> this.setState({UserPass: Info})} 
       style={styles.forgot} label="Password" value="2021"/>
       <View style={styles.forgotPassword}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate("ResetPasswordScreen")}
         >
           <Text style={styles.link}>Forgot your password?</Text>
         </TouchableOpacity>
       </View>

       <View style={styles.forgot}>
         <Text style={styles.forgot}>Don’t have an account? </Text>
         <TouchableOpacity
         
       onPress={() => this.props.navigation.navigate("NewUser")}
         >
           <Text style={styles.link}>Sign up</Text>
         </TouchableOpacity>
       </View>
        <TouchableOpacity
       onPress={this.SubmitNote}
         >
           <Text style={styles.login}>Sign in</Text>
         </TouchableOpacity>
     </Background>
   );}

   }
   const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
      color: '#000000',
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
      color: '#000000',
    },
    forgot: {
      fontSize: 13,
      color: '#000000',
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
     },
    login: {
      fontSize: 43,
      color: '#0000ff',
      fontWeight: 'bold',
      
    },
  })
  

  

  