import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class endgame extends Component {
    constructor(props) {
      super(props);
      this.state = {
         id:"",
         points:"",
         stage:"",
         UserName:"",
         img:""
      };
    }
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
render() {
    return (  

    
    <ImageBackground source= {require('../backe.png')} style={styles.image}>
     
     
        <Image style={styles.king} source= {require('../fire.gif')} />


        <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('WinnerPage')}
>
          <Text style={styles.words}> winners table</Text>
        
          </Button>
          <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('mypro',{UserId:this.state.id,pointsU:this.state.points,stageU:this.state.stage,UserName:this.state.UserName,imgU:this.state.img})}>

           <Text style={styles.words}>my profile</Text>

          </Button>
          <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('mypro',{UserId:this.state.id,pointsU:0,stageU:1,UserName:this.state.UserName,imgU:this.state.img})}>

          <Text style={styles.words}> start over</Text>
        
          </Button>

      </ImageBackground>
    
    );
  }
}

export default endgame