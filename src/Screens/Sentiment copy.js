import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SectionGrid } from "react-native-super-grid";

export default function Example(props) {
  const Comments = [
    {
      id: 1,
      Comment: "my whole body feels itchy and like its on fire",
      result: ""
    },
    { id: 2, Comment: "i like it!!", result: "" },
    {
      id: 3,
      Comment:
        "don`t like it and i hate my new timetable, having such a bad week",
      result: ""
    },
    { id: 4, Comment: "hope ur havin fun", result: "" }
  ];

  const textsent = () => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();

    for (let index = 0; index < Comments.length; index++) {
      Comments[index].result = sentiment.analyze(Comments[index].Comment);
    }

    console.log(Comments);
    alert(Comments[0].result.score);
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={textsent}>
        <Text style={styles.login}>Sign in</Text>
      </TouchableOpacity>

      <Text> Comment:{Comments[0].Comment}</Text>
      <Text> Resoult:{Comments[0].result.score}</Text>
    </View>
  );
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
  login: {
    fontSize: 43,
    color: "#0000ff",
    fontWeight: "bold"
  }
});
