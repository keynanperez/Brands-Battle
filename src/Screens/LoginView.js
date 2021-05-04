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
      UserName:"hodaya",
      UserPass:"aaa",
      UserId:"",
      pointsU:0,
      stageU:1,
      imgU:"",

    };
  }

  async componentDidMount  (){
   
  
     this._unsubscribeFocus  =  this.props.navigation.addListener('focus',(payload) =>{
 
   
 });
   }
  
  SubmitNote = async() =>{
 let  name=this.state.UserName;
 let pass=this.state.UserPass ;
  if((name === '')||(pass === ''))
   {
        alert("Please insert info!")
    }
    else{
      this.props.navigation.navigate('UserHome',{UserId:this.state.UserId,pointsU:this.state.pointsU,stageU:this.state.stageU,UserName:this.state.UserName,imgU:this.state.imgU});
    
      const url = ('http://192.168.0.105:44387/api/'+'Users/')

     
      const userf = await fetch(url, {
          method: 'Put',
          body:   JSON.stringify([name, pass]),
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
             this.props.navigation.navigate('UserHome',{UserId:res.Id,pointsU:res.Points,stageU:res.UserStage,UserName:res.UserName,imgU:res.Img});
           };
          
            
          //this.props.navigation.navigate('MyPageView',{UserId:item.UserId})
           // res.forEach((item) => {
              //if (item.UserName===name && item.UserPass===pass )
             // {
             // 
               
             // }
             
           // });
        

       

    }
    
  }


  render()
  {

   return (
     <Background>
       <Logo />
       <Header>Welcome back.</Header>
       <TextInput label="Email" style={styles.forgot} />
       <TextInput style={styles.forgot} label="Password" />
       <View style={styles.forgotPassword}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}
         >
           <Text style={styles.link}>Forgot your password?</Text>
         </TouchableOpacity>
       </View>

       <View style={styles.forgot}>
         <Text style={styles.forgot}>Don’t have an account? </Text>
         <TouchableOpacity
       onPress={() => this.props.navigation.navigate("RegisterScreen")}
         >
           <Text style={styles.link}>Sign up</Text>
         </TouchableOpacity>
       </View>
        <TouchableOpacity
       onPress={() => this.props.navigation.navigate("UserHome")}
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
  

  

  