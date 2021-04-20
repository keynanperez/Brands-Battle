import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
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
    
    const {UserId}=this.props.route.params;
    this.setState({id:UserId})
    const{UserName}=this.props.route.params;
    this.setState({UserNameU:UserName})
    const {pointsU}=this.props.route.params;
    this.setState({points:pointsU})
    const{stageU}=this.props.route.params;
    this.setState({stage:stageU})
    const{imgU}=this.props.route.params;
    this.setState({img:imgU})

}
  
  render()
  {
  return (
    <ImageBackground source= {require('../backb.png')} style={styles.image}>
    <SafeAreaView>
    <ScrollView >

            <View style={styles.noteViewtitlex}>

            <Image style={styles.ava} rounded size="large" source={{  uri:  'https://img.pngio.com/fileuser-circlepng-wikimedia-commons-png-user-256_256.png', }}/>
            <Text style={styles.notetitle} > Hello {this.state.UserNameU} </Text>
            </View>
            <Text  style={styles.proftext}  > points : {this.state.points} </Text>
            <Text  style={styles.proftext}  > stage : {this.state.stage} </Text>
           <Button  style={styles.butn}  onPress={() =>this.props.navigation.navigate('gameView',{id:this.state.id,points:this.state.points,stage:this.state.stage,UserName:this.state.UserNameU,imgU:this.state.img})}>
           <Text style={styles.words} > let's Go </Text>
             </Button>
             <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('WinnerPage')}
>
          <Text style={styles.words}> winners table</Text>
        
          </Button>
</ScrollView>
  </SafeAreaView>
  </ImageBackground >
  );
  }

}
export default MyPageView;
