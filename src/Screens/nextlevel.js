import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class nextlevel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id:"",
       points:"",
       stage:"",
       UserName:"",
       img:""
}
        
      };
      async componentDidMount(){
            await this.getdata()
            this._unsubscribeFocus  = await this.props.navigation.addListener('focus',(payload) =>{
            this.getdata()
        
          
        });
          }
       getdata=async()=>{
        const {id} = this.props.route.params;
        const {points} = this.props.route.params;
        const {stage} = this.props.route.params;
        const {UserName} = this.props.route.params;
        const {img} = this.props.route.params;
        this.setState({id:id,points:points,stage:stage,UserName:UserName,img:img})
      }
  
    //this.state.userupd.Id,
    //  this.state.userupd.Points,
   // this.state.userupd.UserStage
   // this.state.UserName
   // img:this.state.img
render() {
    return (  

    
    <ImageBackground source= {require('../bacf.png')} style={styles.image}>
     
     
       
       <View style={styles.butnext}>

        <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('gameView',{id:this.state.id,points:this.state.points,stage:this.state.stage,UserName:this.state.UserName,imgU:this.state.img})}
>
          <Text style={styles.words}>next level</Text>
        
          </Button>
          <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('mypro',{UserId:this.state.id,pointsU:this.state.points,stageU:this.state.stage,UserName:this.state.UserName,imgU:this.state.img})}>

          <Text style={styles.words}>my profile</Text>
        
          </Button>
          </View>
      </ImageBackground>
    
    );
  }
}

export default nextlevel

 