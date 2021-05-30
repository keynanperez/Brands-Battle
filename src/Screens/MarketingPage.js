import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { DataTable } from "react-native-paper";
//import Button from '../components/Button'
import Brands from "../data/Data";
import SearchBox from "react-native-searchbox-1";
//import { Header } from 'react-native/Libraries/NewAppScreen';
import Background from "../components/Backgroundgif";
import Header from "../components/Header";
import TextInput from "../components/TextInput";

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
      "Samsung"
    ],
    resultList: [],
    chosenbrand: "",
    followers: "",
    image_url: "",
    location: ""
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

  PressBrand = text => {
    this.setState({
      chosenbrand: text.item
    });
    var twitterAns = this.gettwitterAns("1");
  };
  gettwitterAns = async questionNumber => {
    //alert(chosenbrand)
    const brandOFcat = [];
    console.log(this.state.chosenbrand);
    const url =
      `http://127.0.0.1:8080/api/Twitter?Input=` +
      this.state.chosenbrand +
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
    console.log(res);

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
      image_url: res.data.profile_image_url
    });
    this.setState({
      image_url: res.data.profile_image_url
    });

    if (res != null) {
      switch (1) {
        case 1:
          return res.data.public_metrics.followers_count;

        case 3:
          return res[0].FavoriteCount;
        case 4:
          return res[0].RetweetCount;
        case 10:
          return res;
        case 11:
          return res;
        case 12:
          return res;
        case 14:
          return res;
        default:
          return Alert.alert("shirel");
      }
    }
  };

  render() {
    return (
      <Background>
        <View style={styles.view}>
          <Header></Header>
          <SearchBox
            style={styles.textInput}
            onChangeText={text => this.filterSearch(text)}
          />

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

          {this.state.chosenbrand !== "" ? (
            <View style={styles.brandInfo}>
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
                NO. of Followers: {this.state.followers}
              </Text>
              <Text style={styles.textoutput}>
                Popularty: {this.state.followers}
              </Text>
              <Text style={styles.textoutput}>
                NO. of Followers: {this.state.followers}
              </Text>
            </View>
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
    paddingHorizontal: 10
  },
  btnoutput: {
    //color: '#000000',
    backgroundColor: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  brandInfo: {
    backgroundColor: "#ffffff",
    borderRadius: 60,
    height: "60%",
    width: "100%",
    borderRadius: 5,

    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  brandList: {
    height: "50%",
    width: "80%"
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 22
  }
});

export default App;
