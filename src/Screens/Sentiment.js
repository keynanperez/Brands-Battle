import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionGrid } from "react-native-super-grid";
import { Container, Content, Badge, Icon } from "native-base";
import Header from "../components/Header";
//import Sent from "../node-sentiment/index";
//import sentiment from "node-sentiment";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          Comment: "my whole body feels itchy and like its on fire",
          Result: 0,
          Color: "#1abc9c"
        },
        {
          Comment:
            "don`t like it and i hate my new timetable, having such a bad week",
          Result: 0,
          Color: "#1abc9c"
        },
        { Comment: "i like it!!", Result: 0, Color: "#1abc9c" },
        {
          Comment: "hope ur havin fun",
          Result: 0,
          Color: "#1abc9c"
        }
      ],
      brand: props.brand,
      fetchlist: [],
      Sentimentfetchlist: []
    };
  }

  getTotalNew = a => {
    var sentiment = require("node-sentiment");
    //var Sent = new sentiment();
    var res = sentiment(a);
    console.log(res.comparative);
    if (res.comparative != 0) return res.comparative;
  };
  getMotal = a => {
    var sentiment = require("node-sentiment");
    //var sentiment = new Sentiment();
    var res = sentiment(a);
    //var res = sentiment.analyze(a);
    if (res.comparative > 0) {
      return "#1abc9c";
    }
    if (res.comparative < 0) return "#BC1A1A";
  };
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
    //console.log(this.getTotalNew(res[0]));

    this.setState({
      fetchlist: res
    });
  };
  componentDidMount() {
    this.gettwitterPop(12);
    let a = this.NewList(this.state.fetchlist);
    this.setState({
      Sentimentfetchlist: a
    });
  }

  NewList = a => {
    let i;
    var sum = [];
    var sentiment = require("node-sentiment");
    for (let index = 0; index < a.length; index++) {
      //let point = this.getTotalNew(a[index]);
      var res = sentiment(a[index]);
      if (res.comparative != 0) {
        sum.push(a[index]);
      }
      i++;
    }
    console.log(sum);
    return sum;
  };
  render() {
    return (
      <>
        <Header style={styles.Header}>Sentement analyze</Header>
        <SectionGrid
          itemDimension={190}
          // staticDimension={300}
          // fixed
          // spacing={20}
          sections={[
            {
              data: this.NewList(this.state.fetchlist)
            }
          ]}
          style={styles.gridView}
          renderItem={({ item, section, index }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: this.getMotal(item) }
              ]}
            >
              <Text style={styles.itemName}>{item}</Text>
              <Text style={styles.itemName}>
                Score: {this.getTotalNew(item)}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 20,
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
