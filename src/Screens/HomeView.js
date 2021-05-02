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

  render() {
    return (  

    
    <ImageBackground source= {require('../back.png')} style={styles.image}>
       
          <Text style={styles.headline}>Brand Battle</Text>

          <Button  style={styles.butn} onPress={() => this.props.navigation.navigate('login')}>
          <Icon reverse style={styles.go}  name='play'  />
          <Text style={styles.words}> log in  </Text>
        
          </Button>
         
      </ImageBackground>
    
    );
  }
}



export default HomeView;
