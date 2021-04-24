
import { Row} from 'react-native-easy-grid';
import * as Permissions from 'expo-permissions';  
import React, { Component } from "react";
import { Container } from "native-base";
import * as ImagePicker from "expo-image-picker";
import {Image,View ,ImageBackground} from 'react-native';
import {  Text,Item, Button,Form,Input, Label, Icon, Thumbnail } from 'native-base';
import styles from "./MyStyle";
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
      this.props.navigation.goBack();
    }
  }





  
  render() {
  
    return (
      <>
      
      <ImageBackground source= {require('../back.png')} style={styles.image}>
   
            <View style={styles.noteViewtitle}>
            <Text style={styles.notetitle} > Add new user </Text>
            </View>
            
            <Form style={{paddingTop:'20%'}}>

             <Item floatingLabel  > 
             <Label>Insert your name</Label>
                <Input onChangeText={newname=> this.setState({NewUserName: newname})}/>
             </Item>
             <Item floatingLabel  > 
             <Label>Insert your password</Label>
             <Input  onChangeText={Info=> this.setState({NewUserPass: Info})} />
             </Item>
             <Item floatingLabel  > 
             <Label>verify password</Label>
             <Input  onChangeText={Info=> this.setState({VerPass: Info})} />
             </Item>
            </Form>  
            <Text>You can add an image</Text>
             
              <Button style={styles.SubmitBtn} onPress={this.SubmitNew} >
               <Text>Submit</Text>
              </Button>
             
     
              </ImageBackground>
   

</>
    );
   }
  
  }

export default NewUser;




