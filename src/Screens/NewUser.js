
import { Row} from 'react-native-easy-grid';
import * as Permissions from 'expo-permissions';  
import React, { Component } from "react";

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'

import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { Container } from "native-base";
import * as ImagePicker from "expo-image-picker";
import {Image,View ,ImageBackground,StyleSheet} from 'react-native';
import {  Text,Item, Button,Form,Input, Label, Icon, Thumbnail } from 'native-base';
//import styles from "./MyStyle";
import myUrl from "./Url";
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUserName:"",
      NewUserPass:"",
      VerPass:"",
      points:0,
      stage:1,
      image:'../usav.png',
      newuser:"",
      hasCameraPermission: null,

    };

  }

  SubmitNew =()=>{

    if (this.state.NewUserPass!= this.state.VerPass)
    {
      alert("the password dose not match try agin")
    }
else{

  this.state.newuser={
     UserName: this.state.NewUserName,
    UserPass:this.state.NewUserPass,
    points:this.state.points,
    UserStage:this.state.stage,
    Img:this.state.image}

 
  const url = (myUrl+'Users/')
    fetch(url, {
      method: 'Post',
      body: JSON.stringify(this.state.newuser),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    .then((res) => {
      return res.json(); 
    }),
    (error) => {
      alert("noooo "+error)
      console.log("err post=", error);
    };

    this.setState({
      NewUserName:"",
      NewUserPass:"",
      VerPass:"",
      image:""
      
    });
   
    }
  }





  
  render() {
  
    return (
      <>
      <Background>
      
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
    
      />
      <TextInput
        label="Email"
    
      />
      <TextInput
        label="Password"
   
      />
      <Button
        mode="contained"
       
        style={{ marginTop: 24 }}
      >
        <Text>Sign Up</Text>
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
     
      </View>
    </Background>
     

</>
    );
   }
  
}
  const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})


export default NewUser;




