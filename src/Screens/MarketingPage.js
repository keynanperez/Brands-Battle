import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions
} from "react-native";
import sentiment from "sentiment";
import { Card, Avatar } from "react-native-paper";
const { width } = Dimensions.get("window");
import Swiper from "react-native-swiper";
import { DataTable } from "react-native-paper";
//import Button from '../components/Button'
import Brands from "../data/Data";
import SearchBox from "react-native-searchbox-1";
//import { Header } from 'react-native/Libraries/NewAppScreen';
import Background from "../components/Backgroundgif";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { Button } from "native-base";

class App extends React.Component {
  state = {
    list: [
      "Apple",
      "Google",
      "Microsoft",
      "Facebook",
      "Tencent",
      "IBM",
      "SAP",
      "Accenture",
      "Samsung",
      "Intel",
      "Baidu",
      "Oracle",
      "Huawei",
      "YouTube",
      "Cisco",
      "Adobe",
      "Salesforce",
      "LinkedIn",
      "HP",
      "Instagram",
      "Amazon",
      "Alibaba",
      "The Home Depot",
      "Walmart",
      "Costco",
      "IKEA",
      "Ebay",
      "ALDI",
      "L'Oréal Paris",
      "Colgate",
      "Crest",
      "Estee Lauder",
      "Dove",
      "Garnier",
      "Nivea",
      "Gillette",
      "McDonald's",
      "Starbucks",
      "Subway",
      "KFC",
      "Toyota",
      "Mercedes-Benz",
      "BMW",
      "Ford",
      "Chevrolet",
      "Jeep",
      "Porsche",
      "Audi",
      "Cadillac",
      "Volkswagen",
      "Lexus",
      "Ferrari",
      "Honda",
      "Nike",
      "Zara",
      "Louis Vuitton",
      "Hermes",
      "Gucci",
      "Chanel",
      "Prada",
      "Uniqlo",
      "Burberry",
      "Tom Ford",
      "RalphLauren",
      "Next",
      "ASOS",
      "Moncler",
      "Adidas"
    ],
    resultList: [],
    chosenbrand: "",
    chosenbrandRefrash: "",
    followers: "",
    image_url: "",
    location: "",
    Popularty: "",
    like_count: "",
    reply_count: "",
    retweet_count: ""
  };

  filterSearch = text => {
    const searchingText = text.toUpperCase();
    const upperCaseList = [];
    for (let i = 0; i < this.state.list.length; i++) {
      upperCaseList.push(this.state.list[i].toUpperCase());
    }
    const filteredList = upperCaseList.filter(
      word => word.indexOf(searchingText) > -1
    );
    this.setState({
      resultList: filteredList
    });
  };

  PressBrand = async text => {
    await this.setState({
      chosenbrandRefrash: text.item
    });
    var twitterAns = await this.gettwitterAns("1");
    var twitterAns2 = await this.gettwitterPop("5");
    var twitterAns3 = await this.gettwitts("14");
    var twitterAns4 = await this.gettcomm("15");
  };

  gettwitterAns = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];

    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.chosenbrandRefrash +
      `&question=` +
      1;
    const userf = await fetch(url, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8"
      })
    });

    const res = await userf.json();

    this.setState({
      location: res.data.location
    });
    this.setState({
      followers: res.data.public_metrics.followers_count
    });
    this.setState({
      image_url: res.data.profile_image_url
    });
    this.setState({
      like_count: res.includes.tweets[0].public_metrics.like_count
    });
    this.setState({
      reply_count: res.includes.tweets[0].public_metrics.reply_count
    });
    this.setState({
      retweet_count: res.includes.tweets[0].public_metrics.retweet_count
    });
    this.setState({
      chosenbrand: this.state.chosenbrandRefrash
    });
    var PopulartyCalc =
      this.state.like_count * 0.3 +
      this.state.reply_count * 0.2 +
      this.state.retweet_count * 0.5;
    var Populartysum =
      this.state.like_count + this.state.reply_count + this.state.retweet_count;

    var PopulartyCalculetor = (PopulartyCalc / Populartysum) * 100;
    //alert(PopulartyCalculetor);
  };
  gettwitterPop = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];

    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.chosenbrand +
      `&question=` +
      5;
    const userf = await fetch(url, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8"
      })
    });

    const res = await userf.json();
    // console.log(res);
    this.setState({
      Popularty: res
    });
  };

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

    /*  console.log(res.includes.tweets[0].public_metrics.like_count);
    console.log(res.includes.tweets[0].public_metrics.quote_count);
    console.log(res.includes.tweets[0].public_metrics.reply_count);
    console.log(res.includes.tweets[0].public_metrics.retweet_count); */
  };

  gettcomm = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];

    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.chosenbrand +
      `&question=` +
      4;
    const userf = await fetch(url, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8"
      })
    });

    const res = await userf.json();

    /*  console.log(res.includes.tweets[0].public_metrics.like_count);
    console.log(res.includes.tweets[0].public_metrics.quote_count);
    console.log(res.includes.tweets[0].public_metrics.reply_count);
    console.log(res.includes.tweets[0].public_metrics.retweet_count); */
  };

  render() {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    var result = sentiment.analyze("Cats are good.");

    return (
      <Background>
        <View style={styles.view}>
          <Header></Header>
          <SearchBox
            style={styles.textInput}
            onChangeText={text => this.filterSearch(text)}
          />
          <ScrollView style={styles.brandList}>
            <FlatList
              style={styles.brandList}
              data={this.state.resultList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.PressBrand({ item })}
                  style={[styles.item]}
                >
                  <Text style={[styles.title]}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
          {this.state.chosenbrand !== "" ? (
            <Card style={styles.brandInfo}>
              {/*  <Avatar.Image size={100} source={{ uri: this.state.image_url }} /> */}
              <Image
                source={{ uri: this.state.image_url }}
                style={{ width: 80, height: 80, borderRadius: 60, margin: 10 }}
              />
              <Text style={styles.textoutput}>
                Brand Name : {this.state.chosenbrand}
              </Text>
              <Text style={styles.textoutput}>
                Location: {this.state.location}
              </Text>
              <Text style={styles.textoutput}>
                NO. of Followers: {this.state.followers}K
              </Text>
              <Text style={styles.textoutput}>
                Popularty Score: {this.state.Popularty}
              </Text>
              <Button
                icon="gamepad-variant"
                mode="contained"
                style={styles.card}
                onPress={() =>
                  this.props.navigation.navigate("MoreBrandData", {
                    Popularty: this.state.Popularty,
                    chosenbrand: this.state.chosenbrand
                  })
                }
              >
                <Text style={styles.text}> More Information </Text>
              </Button>
            </Card>
          ) : null}
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 20
  },
  view: {
    padding: 8,
    marginTop: 10,
    alignItems: "center",
    height: "90%",
    width: "100%"
  },
  container: {
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: "20%",
    flex: 1
  },
  textInput: {
    //backgroundColor: '#BFBFBF',
    width: "80%",
    borderRadius: 25,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  textoutput: {
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#ffffff"
  },
  btnoutput: {
    //color: '#000000',
    backgroundColor: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  brandInfo: {
    backgroundColor: "#6200EE",
    borderRadius: 90,
    height: "50%",
    width: 360,
    borderRadius: 50,

    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  brandList: {
    height: 250,
    width: "80%"
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 22
  },
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },

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
  },

  image: {
    width,
    flex: 1
  }
});

export default App;
