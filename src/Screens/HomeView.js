import React, { Component } from 'react';
import { Icon, Text ,Button} from 'native-base';
import { ImageBackground, Image } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import styles from "./MyStyle";
import myUrl from "./Url";
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logolist:[],
      name:[],
      logo:"",
    };
  }

  letsgo=async ()=>{
    
    const promi=this.state.name.map(element => {

      var myHeaders = new Headers();
  myHeaders.append("x-api-key", "Ak26dTKXRM82dP3iS5Jq796Ncd3At98G6IzS7X8z");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({"domain":"www."+element+".com"});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  return fetch("https://api.brandfetch.io/v1/logo", requestOptions)
   .then((response) => response.json())
   .then((result) => {
     console.log(result.response)
      this.setState({logo:
        {LogoName:element,
        LogoImg:result.response.icon.image,
      }
      })
      this.state.logolist.push(this.state.logo)
      })
      
    
    .catch(error => console.log('error', error));
        
      });
  
   
   
      await Promise.all(promi);
      console.log(this.state.logolist);
      this.postdata();
        }
  
    postdata=()=>{
  const url = (myUrl+`Logo/`)
  let data=this.state.logolist
  fetch(url, {
    method: 'Post',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })
  .then((res) => {
   alert("sucssess")
    return res.json(); 
  },(err) => {
    console.warn('error',err)
    alert("noooooo"+{err})
  })
  .catch(err => alert(err)) 
  
  
}

  render() {
    return (  

    
    <ImageBackground source= {require('../back.png')} style={styles.image}>
       
          
          <Image style={styles.king} source= {require('../king.gif')} />
          <Button  style={styles.butn} onPress={() => this.props.navigation.navigate('login')}>
          <Icon reverse style={styles.go}  name='play'  />
          <Text style={styles.words}> play </Text>
        
          </Button>
          <Button rounded style={styles.butn} onPress={this.letsgo}>
          <Text style={styles.words}> go </Text>
        
          </Button>

      </ImageBackground>
    
    );
  }
}



export default HomeView;
