import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Icon from "@expo/vector-icons/AntDesign";
import { Services, Employees } from "../data/Data";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Checkbox,
  List,
} from "react-native-paper";
import LottieView from "lottie-react-native";

import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import UserAppointments from "./UserAppointments";

import CircularCard from "../lib/CircularCard";

export default class UserHome extends React.Component {
  static navigationOptions = {
    title: "First Screen",
  };

  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      stage: 1,
      id: 0,
      UserNameU: "",
      img: "",
    };
    //alert(this.state.prevScreentor[1].Barber_Email)
  }
  async componentDidMount() {
    await this.getdata();
    this._unsubscribeFocus = await this.props.navigation.addListener(
      "focus",
      (payload) => {
        this.getdata();
      }
    );
  }

  getdata = async () => {
    const { UserId } = this.props.route.params;
    this.setState({
      id: UserId,
    });
    const { UserName } = this.props.route.params;
    this.setState({
      UserNameU: UserName,
    });
    const { pointsU } = this.props.route.params;
    this.setState({
      points: pointsU,
    });
    const { stageU } = this.props.route.params;
    this.setState({
      stage: stageU,
    });
    const { imgU } = this.props.route.params;
    this.setState({
      img: imgU,
    });
  };
  render() {
    const { navigation } = this.props;
    //alert("keynan");
    return (
     <Background>
   
      
          <View>
            <Button
           
            
            onPress={() =>
              this.props.navigation.push("Marketing", {
                id: this.state.id,
                points: this.state.points,
                stage: this.state.stage,
                UserName: this.state.UserNameU,
                imgU: this.state.img,
              })
            }
        >
            <MaterialCommunityIcons name="twitter" size={200} color="blue" />
            
          </Button>
        
          </View>
          <Button
           
            
            onPress={() =>
              this.props.navigation.push("UserDashboard", {
                id: this.state.id,
                points: this.state.points,
                stage: this.state.stage,
                UserName: this.state.UserNameU,
                imgU: this.state.img,
              })
            }
        >
        <MaterialCommunityIcons name="gamepad-variant" size={200} color="black" />
        </Button>
       
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: "center",
    // borderRadius: 20,

    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
  },
  imagecard: {
    resizeMode: "cover",
    //borderRadius: 80,
    margin: 10,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    //color: "white",
    marginTop: 150,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  card: {
    //color: "white",
    borderRadius: 105,
    margin: 20,
    //padding: 20,
    //fontSize: 42,
    //fontWeight: "bold",
    //textAlign: "center",
    //borderBottomLeftRadius: 8,
    //borderBottomRightRadius: 8,
    // justifyContent: 'center',
    //backgroundColor: "#000000a0"
    borderWidth: 4,
    borderColor: "#181613",
  },
});
