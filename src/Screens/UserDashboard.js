import React, { Component } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

//import styles from "./MyStyle";
import Background from '../components/Background'
import { Icon,Avatar } from 'react-native-elements';
import { Button, Row } from 'native-base';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
    <Background>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/profile-pic.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons
              name="chat"
              size={18}
              color="#dfd8c8"
            ></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons
              name="ios-add"
              size={48}
              color="#dfd8c8"
              style={{ marginTop: 6, marginLeft: 2 }}
            ></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Keynan Peretz
          </Text>
          <Text style={[styles.text, { color: "#aeb5bc", fontSize: 14 }]}>
            Student
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{this.state.points}</Text>
            <Text style={[styles.text, styles.subText]}>Total Points</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#dfd8c8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>112</Text>
            <Text style={[styles.text, styles.subText]}>Games</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>101</Text>
            <Text style={[styles.text, styles.subText]}>Place</Text>
          </View>
        </View>


          
         
       
            
           
            <Button block success rounded style={styles.card} onPress={() =>this.props.navigation.push('Categories',{id:this.state.id,points:this.state.points,stage:this.state.stage,UserName:this.state.UserNameU,imgU:this.state.img})}>
           <Text>Play</Text>
             </Button>
     
             <Button   block  rounded style={styles.card}  onPress={() =>this.props.navigation.navigate('WinnerPage')}>
          <Text > winners table</Text>
          </Button>
</ScrollView>
  </SafeAreaView>
  </Background>
  );
  }

}
export default MyPageView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575d",
  },
  subText: {
    fontSize: 12,
    color: "#aeb5bc",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34ffb9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444b",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  recentItemIndicator: {
    backgroundColor: "#CADFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
   card: {
    //backgroundColor: "#41444b",
    //position: "absolute",
    bottom: 0,
    right: 0,
    //width: 200,
    height: 50,
    width:200,
    margin:20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
