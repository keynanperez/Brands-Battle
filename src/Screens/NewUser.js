
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
import {Image,View ,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';
import {  Text,Item, Button,Form,Input, Label, Icon, Thumbnail } from 'native-base';
//import styles from "./MyStyle";
import myUrl from "./Url";
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUserName:"",
      NewUserPass:"",
      NewUserMail:"",
      points:0,
      newuser:""

    };

  }

    insertUser=async()=>{

  this.state.newuser={
     UserName: this.state.NewUserName,
    UserPass:this.state.NewUserPass,
    points:this.state.points,
    Mail:this.state.NewUserMail,
  }
  const url = `http://172.20.10.2:44365/api/Users`
    const userf =await fetch(url, {
      method: 'Post',
      body: JSON.stringify(this.state.newuser),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    .then((res) => {
      if(res.json()!= null) 
      this.props.navigation.navigate("login");
    });
    
    this.setState({
      NewUserName:"",
      NewUserPass:"",
      newuser:"",
      NewUserMail:"",
  
    });
   
    }
  
 
  render() 
  {
  
    return (
      <>
      <Background>
      
      <Logo />
      <Header>Create Account</Header>
      <TextInput onChangeText={Info=> this.setState({NewUserName: Info})}
        label="Name"
    
      />
      <TextInput onChangeText={Info=> this.setState({NewUserMail: Info})}    
        label="Email"
      />
      <TextInput onChangeText={Info=> this.setState({NewUserPass: Info})}
        label="Password"
   
      />
      <Button onPress={this.insertUser}
        mode="contained"
       
        style={{ marginTop: 24 }}
      >
        <Text>Sign Up</Text>
      </Button>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('login')}style={styles.row}>
  
        <Text>Already have an account? </Text>

      </TouchableOpacity>  
    </Background>
</>
    );
   }
}
export default NewUser;

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


