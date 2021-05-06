import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text,List,Left,Right,Thumbnail,Body,Content,View } from 'native-base';
import { ListItem, Avatar } from 'react-native-elements';
import Logo from '../components/Logogame'
import Header2 from '../components/Header'
export default class SearchBarExample extends Component {
    
  render() {
      const list = [
  {
    name: 'Google',

  },
   {
    name: 'Facebook',

  },
    {
    name: 'Amazon',

  },  {
    name: 'Nike',

  },
    {
    name: 'Adidas',

  },
    {
    name: 'Puma',

  },

]

    return (
      <Container>
      
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Brand" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search </Text>
          </Button>
        </Header>
         <Logo />
       <Header2>  Please Search a Brand from the list.</Header2>
         <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
      </Container>
    );
  }
}