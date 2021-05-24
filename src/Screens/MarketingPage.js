import React, { Component , useState } from 'react';
import { Container, Header, Input, Icon, Button, List, Left, Right, Thumbnail, Body, Content, View } from 'native-base';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import Logo from '../components/Logogame'
import Header2 from '../components/Header'
import Paragraph from '../components/Paragraph'
import BrandsList from '../components/BrandsList'
const DATA = [
  {
    id: "0",
    name: "Google",
  },
  {
    id: "1",
    name: "Apple",
  },
  {
    id: "2",
    name: "Microsoft",
  },
  {
    id: "3",
    name: "Facebook",
  },
  {
    id: "4",
    name: "IBM",
  },
  {
    id: "5",
    name: "Samsung",
  },
  {
    id: "6",
    name: "Amazon",
  },
  {
    id: "7",
    name: "Alibaba",
  },
  {
    id: "8",
    name: "Nike",
  },
  
];
const datainfo = [
{
    id: "0",
  name:"",
    info: "Google info",
    brandfollowers: "30,324",
    brandtweets: "452",
      Rating:"49.3",
  },
  {
    id: "1",
      name:"",
    info: "Apple info",
    brandfollowers: "52,324",
    brandtweets: "1452",
      Rating:"89.3",
  },
],

 Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);



const App = () => {
  const [selectedId, setSelectedId,brandfollowers] = useState(null);

   const handleClick = (id) => {
    alert( datainfo[id].info);
    }
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" : "#ffffff";
    const color = item.id === selectedId ? 'white' : 'black';
    const brandfollowers = item.brandfollowers;

   
  

    return (
      <Item
        item={item}
        onPress={() => handleClick(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        brandfollowers={{brandfollowers}}
        
      />
    );
  };

  return (
    <Container>
        <Header searchBar rounded>
          
            <Icon name="ios-search" />
            <Input placeholder="Search Brand" />
          
          
          <Button transparent>
            <Text>Search </Text>
          </Button>
        </Header>
      <SafeAreaView style={styles.container}>
       
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      </SafeAreaView>
       <SafeAreaView style={styles.data}>
        
        <Paragraph>
          <Text> Brand Name: </Text>
         
        </Paragraph>
          <Paragraph>
          <Text>Followers: </Text>
         
        </Paragraph>
          <Paragraph>
          <Text>Tweets: </Text>
         
        </Paragraph>
          <Paragraph>
          <Text>Rating: </Text>
         
       </Paragraph>
      
    </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height:'40%',
  },
   data: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height:'60%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },


  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemMeta: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
  },
  itemLastMessage: {
    fontSize: 14,
    color: "#111",
  }

});

export default App;