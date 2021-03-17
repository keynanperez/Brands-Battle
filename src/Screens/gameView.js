import React, { Component } from 'react';
import {SafeAreaView, Text,View,ImageBackground,Image,ScrollView } from 'react-native';
import styles from "./MyStyle";
import {Row, Col} from 'react-native-easy-grid';
import { Button } from 'native-base';
import CountDown from 'react-native-countdown-component';
//import { Input,Item} from 'native-base';
//import CountDown from 'react-native-countdown-component';
import { DrawerActions } from '@react-navigation/native';
import CharacterInput from 'react-native-character-input';
import myUrl from "./Url";


class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level:"",
        logoimg:"/02/322868_1100-1100x628.jpg",
        logoname:"n",
        userupd :[],
        stagepoints:"",
        len:[],
        guess:[],
        timer: 10,
        UserName:"",
        img:"",
        flag:0,
        skip:0,
        hint:0,
        x:"",
        first:"",

    }
  

   


  

  };
  postdata=async()=>{
    
    
    const url = (myUrl+'Users/')
   const userdata= await fetch(url, {
      method: 'Delete',
      body: JSON.stringify(this.state.userupd),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    this.setState({})

    this.props.navigation.navigate('nextlevel',{id:this.state.userupd.Id,points:this.state.userupd.Points,stage:this.state.userupd.UserStage,UserName:this.state.UserName,img:this.state.img});
    console.log(this.state.userupd.Id,this.state.userupd.Points,this.state.userupd.UserStage,this.state.UserName,this.state.img)
    this.setState({timer:100, len:[],flag:0,skip:0, hint:0, x:"", first:""})
  }

  getdata=async()=>{
    
    const {stage} = this.props.route.params;
    const {UserName} = this.props.route.params;
    const {imgU} = this.props.route.params;
   
    this.setState({UserName:UserName,img:imgU})
    if(stage>=30)
    {
      const {id} = this.props.route.params;
      const {points} = this.props.route.params;
      this.props.navigation.navigate('endgame',{id:id,points:points,stage:stage,UserName:this.state.UserName,img:this.state.img});
      this.setState({timer:100, len:[],flag:0,skip:0, hint:0, x:"", first:""})
    }
    else{
    this.setState({level:stage})
    const url = (myUrl+`Logo?numStage=`+stage)
    const lego =await  fetch(url, {
       method:'Get',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
  const res= await lego.json()
  console.log(res);
   this.setState({logoimg:res.LogoImg,logoname:res.LogoName})
   let fobo=this.state.logoname.split("")
   this.setState({len:fobo})

   
   const internal = setInterval(() => {

    if( (this.state.timer <= 0 )||(this.state.skip==1))
     {
      if(this.state.flag==0)
      {
      this.setState({flag:1})
      clearInterval(internal)
    const {id} = this.props.route.params;
    const {points} = this.props.route.params;
    const {stage} = this.props.route.params;

    let newscore=stage+1
    this.state.userupd={
      Id:id,
     Points:points,
     UserStage:newscore,
    }
      this.postdata()
    } 
  }
    else {
      this.setState({timer: this.state.timer - 1})
      if((this.state.guess==this.state.logoname)||(this.state.guess==this.state.logoname.toUpperCase()))
      {
        const {id} = this.props.route.params;
        const {points} = this.props.route.params;
        const {stage} = this.props.route.params;
        let newscore=stage+1
        let newpoint=points+this.state.timer+10;
        this.state.userupd={
          Id:id,
         Points:newpoint,
         UserStage:newscore,
        }

        clearInterval(internal)
        this.postdata()
      }
    }
  }, 1000)
  }
  }

  async componentDidMount  (){
 
   // clearInterval(this.interval)
    await this.getdata()
    this._unsubscribeFocus  = await this.props.navigation.addListener('focus',(payload) =>{
    //clearInterval(this.interval)
    this.getdata()

  
});
  }
 





  //
  
 // const {id} = this.props.route.params;
 // const {points} = this.props.route.params;
  //const {stage} = this.props.route.params;



 
  render() 
  {
    if(this.state.len.length>0)
    {
  
    return (
    
   

      <ImageBackground source= {require('../backb.png')} style={styles.image}>
      <ScrollView >
      <View >
      <Text style={styles.proftexts} > Stage {this.state.level} </Text>
      <Text style={styles.proftextstime} > timer {this.state.timer} </Text>
      {
          (this.state.hint==0?    <Button rounded style={styles.btnhint}  onPress={() => this.setState({first:this.state.len[0].toUpperCase(),hint:1,x:Array(this.state.len.length).fill('_').join('')})}>
          <Text style={styles.words}>GET A HINT</Text>
        
          </Button>:null)
        }
     <Image style={style=styles.logoimage} source={{uri:this.state.logoimg}}/>  
     
      </View>
      <Row  style={style=styles.rowguss}>
     { this.state.hint==0? 
      <CharacterInput
  placeHolder={Array(this.state.len.length).fill('_').join('')}
  showCharBinary={Array(this.state.len.length).fill('1').join('')}
  handleChange={(guess) => { this.setState({guess}) }}
  inputType='contained'
  keyboardType='default'
  
/>:      <CharacterInput
  placeHolder={this.state.first+this.state.x.substring(1)}
  showCharBinary={Array(this.state.len.length).fill('1').join('')}
  handleChange={(guess) => { this.setState({guess}) }}
  inputType='contained'
  keyboardType='default'
  
/>}
      </Row>
      <Row>
     
      <Button rounded style={styles.butnx}  onPress={() => this.setState({skip:1})}>
            <Text style={styles.words}>SKIP</Text>
          
            </Button>
            </Row>
      
            </ScrollView>
      </ImageBackground>
    
    );
  }

else
{
  return(
  <Image style={style=styles.logoimage} source={{uri: "/02/322868_1100-1100x628.jpg"}}/>  
  )
}
}
}
export default gameView;


