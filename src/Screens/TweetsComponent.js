import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionGrid } from "react-native-super-grid";
import Header from "../components/Header";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: props.first[0], code: "#1abc9c" },
        { name: props.first[1], code: "#2ecc71" },
        { name: props.first[2], code: "#3498db" },
        { name: props.first[3], code: "#9b59b6" }
      ]
    };
  }
  componentDidMount() {
    console.log("componentDidMount() lifecycle");
  }
  render() {
    return (
      <>
        <Header style={styles.Header}>Best Tweets</Header>
        <SectionGrid
          itemDimension={190}
          sections={[
            {
              data: this.state.items
            }
          ]}
          style={styles.gridView}
          renderItem={({ item, section, index }) => (
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
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
