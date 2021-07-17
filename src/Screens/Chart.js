import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  Dimensions
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Pie from "./Pie";
import Sentiment from "./Sentiment";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    //console.log(this.props);

    this.state = {
      brand: this.props.brand,
      fetchlist: " ",
      posCounter: 0
    };
  }
  gettwitterPop = async questionNumber => {
    const brandOFcat = [];

    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.brand +
      `&question=` +
      16;
    const userf = await fetch(url, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8"
      })
    });

    const res = await userf.json();
    // console.log(res);
    this.ReactionCounter(res);
    /* this.setState({
      fetchlist: res
    }); */
    console.log(this.state.fetchlist);
  };
  ReactionCounter = a => {
    var sentiment = require("node-sentiment");
    let pos = [0, 0];
    //let neg = 0;
    //alert(a.length);
    for (let index = 0; index < a.length; index++) {
      let res = sentiment(a[index]);

      if (res.comparative > 0) {
        //alert("hi");
        pos[0]++;
      }
      if (res.comparative < 0) {
        pos[1]++;
      }
    }

    this.setState({
      posCounter: pos
    });
    alert(this.state.posCounter[1]);
    alert(this.state.posCounter[0]);
  };
  componentDidMount() {
    this.gettwitterPop(12);
    // this.ReactionCounter(this.state.fetchlist);
  }

  render() {
    return (
      <View style={styles.gridView}>
        <LineChart
          gridView
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />

        <Pie brand={this.state.posCounter}></Pie>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 100,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 200
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
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "white",
    padding: 10
  },
  Header: {
    fontSize: 25,

    padding: 80
  }
});
