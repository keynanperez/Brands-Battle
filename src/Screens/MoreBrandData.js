import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { FlatGrid } from "react-native-super-grid";
import TweetsComponent from "./TweetsComponent";
import SentimentPage from "./Sentiment";
import Chart from "./Chart";
import Pie from "./Pie";
import sentiment from "sentiment";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.navigation.state.params.comments);
    this.state = {
      Popularty: this.props.navigation.state.params.Popularty,
      chosenbrand: this.props.navigation.state.params.chosenbrand,
      listTweet: [],
      likes: this.props.navigation.state.params.likes,
      comments: this.props.navigation.state.params.comments,
      follow: this.props.navigation.state.params.follow,
      retweets: this.props.navigation.state.params.retweets
    };
  }
  componentDidMount() {
    this.gettwitts();
  }
  gettwitts = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];

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

    this.setState({
      listTweet: res
    });
  };

  render() {
    console.log(this.state.comments);
    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <TweetsComponent first={this.state.listTweet} />

        <SentimentPage brand={this.state.chosenbrand} />

        <Chart
          brand={this.state.chosenbrand}
          // comments={this.state.comments}
          /*  likes={this.state.like_count}
          comments={this.state.comments}
          retweets={this.state.retweets}
          follow={this.state.follow} */
        />
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
