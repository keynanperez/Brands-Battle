import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button, Row } from 'native-base';
class MyPageView extends Component {
    constructor(props) {
      super(props);
      this.state = {
         points:0,
         stage:1,
         id:0,
         UserNameU: "",
         img:""
         
      };
    }
    async componentDidMount  (){
      await this.getdata()
      this._unsubscribeFocus  = await this.props.navigation.addListener('focus',(payload) =>{
      this.getdata()
  
    
  });
    }
   
    getdata=async()=>{
    
    const {id}=this.props.route.params;
    this.setState({id:id})
    const{UserName}=this.props.route.params;
    this.setState({UserName:UserName})
    const {points}=this.props.route.params;
    this.setState({points:points})
    const{stage}=this.props.route.params;
    this.setState({stage:stage})
    const{img}=this.props.route.params;
    this.setState({img:img})

}
  
  render()
  {
  return (
    <ImageBackground source= {require('../back.png')} style={styles.image}>
    <SafeAreaView>
    <ScrollView >

            <View style={styles.noteViewtitlex}>

            <Image style={styles.ava} rounded size="large" source={{  uri:  'https://img.pngio.com/fileuser-circlepng-wikimedia-commons-png-user-256_256.png', }}/>
            <Text style={styles.notetitle} > Hello {this.state.UserNameU} </Text>
            </View>
            <Text  style={styles.proftext}  >  Total Points : </Text>
            <Text  style={styles.notetitlex}  > {this.state.points} </Text>
           
           <Button  style={styles.butnn}  onPress={() =>this.props.navigation.push('Categories',{id:this.state.id,points:this.state.points,stage:this.state.stage,UserName:this.state.UserNameU,imgU:this.state.img})}>
           <Text style={styles.words} >Play</Text>
             </Button>
     
             <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('WinnerPage')}>
          <Text style={styles.words}> winners table</Text>
          </Button>
</ScrollView>
  </SafeAreaView>
  </ImageBackground >
  );
  }

}
export default MyPageView;
