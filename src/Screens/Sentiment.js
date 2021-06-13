import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionGrid } from "react-native-super-grid";
import { Container, Content, Badge, Icon } from "native-base";
import Header from "../components/Header";

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
      ]
    };
  }
  getTotal = a => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    var res = sentiment.analyze(a);
    return res.score;
  };
  getMotal = a => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    var res = sentiment.analyze(a);
    if (res.score > 0) return "#1abc9c";
    else return "#BC1A1A";
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
              data: this.state.list
            }
          ]}
          style={styles.gridView}
          renderItem={({ item, section, index }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: this.getMotal(item.Comment) }
              ]}
            >
              <Text style={styles.itemName}>{item.Comment}</Text>
              <Text style={styles.itemName}>
                Score: {this.getTotal(item.Comment)}
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
    height: 100
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
