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
  ImageBackground
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Background from "../components/Backgroundgifhome";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Icon from "@expo/vector-icons/AntDesign";
import { Services, Employees } from "../data/Data";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Checkbox,
  List
} from "react-native-paper";

import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import UserAppointments from "./UserAppointments";

import CircularCard from "../lib/CircularCard";

export default class UserHome extends React.Component {
  static navigationOptions = {
    title: "First Screen"
  };

  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      stage: 1,
      id: 0,
      UserNameU: "",
      img: ""
    };
    //alert(this.state.prevScreentor[1].Barber_Email)
  }
  async componentDidMount() {
    await this.getdata();
    this._unsubscribeFocus = await this.props.navigation.addListener(
      "focus",
      payload => {
        this.getdata();
      }
    );
  }

  getdata = async () => {
    const { UserId } = this.props.route.params;
    this.setState({
      id: UserId
    });
    const { UserName } = this.props.route.params;
    this.setState({
      UserNameU: UserName
    });
    const { pointsU } = this.props.route.params;
    this.setState({
      points: pointsU
    });
    const { stageU } = this.props.route.params;
    this.setState({
      stage: stageU
    });
    const { imgU } = this.props.route.params;
    this.setState({
      img: imgU
    });
  };
  render() {
    const { navigation } = this.props;
    //alert("keynan");
    return (
      <Background>
        <View>
          <Button
            icon="twitter"
            mode="contained"
            style={styles.card}
            onPress={() =>
              this.props.navigation.navigate("Marketing", {
                id: this.state.id,
                points: this.state.points,
                stage: this.state.stage,
                UserName: this.state.UserNameU,
                imgU: this.state.img
              })
            }
          >
            <Text style={styles.text}> Marketing </Text>
          </Button>
        </View>
        <Button
          icon="gamepad-variant"
          mode="contained"
          style={styles.card}
          onPress={() =>
            this.props.navigation.navigate("UserDashboard", {
              id: this.state.id,
              points: this.state.points,
              stage: this.state.stage,
              UserName: this.state.UserNameU,
              imgU: this.state.img
            })
          }
        >
          <Text style={styles.text}> Game </Text>
        </Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5
  },
  Bottom: {
    flex: 0.3,
    //backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    //backgroundColor: "#41444b",
    //position: "absolute",
    bottom: 0,
    right: 0,
    //width: 200,
    height: 200,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
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
    borderBottomRightRadius: 20
  },
  text: {
    //color: "white",
    //marginTop: 150,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 100
    //backgroundColor: "#000000a0"
  },
  card: {
    //backgroundColor: "#41444b",
    //position: "absolute",
    bottom: 0,
    right: 0,
    //width: 200,
    height: 150,
    width: 200,
    margin: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {}
});
