import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { FlatGrid } from "react-native-super-grid";
import TweetsComponent from "./TweetsComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Popularty: this.props.navigation.state.params.Popularty,
      chosenbrand: this.props.navigation.state.params.chosenbrand
    };
    console.log(this.props.navigation.state.params.Popularty);
    console.log(this.props.navigation.state.params.chosenbrand);
  }

  gettwitts = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];
    console.log(this.state.chosenbrand);
    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.chosenbrand +
      `&question=` +
      14;
    const userf = await fetch(url, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8"
      })
    });

    const res = await userf.json();
    console.log(res);
    this.setState({
      Popularty: this.res
    });
    /*  console.log(res.includes.tweets[0].public_metrics.like_count);
    console.log(res.includes.tweets[0].public_metrics.quote_count);
    console.log(res.includes.tweets[0].public_metrics.reply_count);
    console.log(res.includes.tweets[0].public_metrics.retweet_count); */
  };

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <TweetsComponent />

        <View testID="Beautiful" style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }

  styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1
    },
    itemContainer: {
      justifyContent: "flex-end",
      borderRadius: 5,
      padding: 10,
      height: 150
    },
    itemName: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "600"
    },
    itemCode: {
      fontWeight: "600",
      fontSize: 12,
      color: "#fff"
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9DD6EB"
    },
    slide2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#97CAE5"
    },
    slide3: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#92BBD9"
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
}
