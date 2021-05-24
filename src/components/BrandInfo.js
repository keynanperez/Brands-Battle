/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Item, Header } from "native-base";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import MarketingTweets from "./MarketingTweets";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { DataTable } from "react-native-paper";
import SearchDropDown from "./SearchDropDown";
import Brands from "../data/Data";
export default function BrandInfo(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {
            <View>
              <Header>
                <Text style={styles.Header}> {props.dataFromParent}</Text>
              </Header>
              <LineChart
                data={{
                  labels: [
                    "Followers",
                    "tweets",
                    "Retweets",
                    "Likes",
                    "Commends",
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          }
        </View>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            {" "}
            <Text style={styles.Titletable}>Group</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            {" "}
            <Text style={styles.Titletable}>popularity</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            {" "}
            <Text style={styles.Titletable}>Improvement</Text>{" "}
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Twitter Api</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>-6.0%</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> Gamares</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0%</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: "center",
    //marginTop: '20%',
    flex: 1,
  },
  Header: {
    // justifyContent: 'center',
    textAlign: "center",
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
    //flex: 1
  },
  textInput: {
    backgroundColor: "#BFBFBF",
    width: "100%",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  Titletable: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B62F2F",
  },
});
