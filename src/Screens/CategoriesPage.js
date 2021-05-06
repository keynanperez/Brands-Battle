import React , { Component }from "react";
import { ImageBackground, ScrollView, StatusBar, StyleSheet ,  Text,
  View,
  Image,
  SafeAreaView} from "react-native";
import ApparelQuestions from "../data/Apparel";
import CarsQuestions from "../data/Cars";
import FastFoodQuestions from "../data/FastFood";
import PersonalCareQuestions from "../data/PersonalCare";
import RetailQuestions from "../data/Retail";
import TechnologyQuestions from "../data/Technology";
import CircularCard from "../lib/CircularCard";
import ImagedCarouselCard from "../lib/ImagedCarouselCard";
import Background from '../components/Background';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Categories extends Component {

  
  render() {
    <View> <Text> Please choose category to play with </Text> </View>
    return (  
           <Background>
          
    <View style={styles.add}>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
         
            <CircularCard 
        title="Cars"
        source={require("../images/car.jpg")}
        onPress={() =>
         this.props.navigation.navigate("Quiz", {
            title: "Cars",
            questions: CarsQuestions,
            color: "#6F96B8"
          })
        }
      />
      
      <CircularCard 
      
        title="Fast Food"
        source={require("../images/fastfood.jpg")}
        onPress={() =>
          this.props.navigation.navigate("Quiz", {
            title: "FastFood",
            questions: FastFoodQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard 
        title="Technology"
        source={require("../images/Technology.jpg")}
        onPress={() =>
          this.props.navigation.navigate("Quiz", {
            title: "Technology",
            questions: TechnologyQuestions,
            color: "#6F96B8",
          })
        }
      />
      <CircularCard 
        title="Retail"
        source={require("../images/Retail.png")}
        onPress={() =>
          this.props.navigation.navigate("Quiz", {
            title: "Retail",
            questions: RetailQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard 
        title="Personal Care"
        source={require("../images/PersonalCare.png")}
        onPress={() =>
          this.props.navigation.navigate("Quiz", {
            title: "PersonalCare",
            questions: PersonalCareQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard 
        title="Apparel"
        source={require("../images/Apparel.jpg")}
        onPress={() =>
          this.props.navigation.navigate("Quiz", {
            title: "Apparel",
            questions: ApparelQuestions,
            color: "#6F96B8",
          })
        }
      />
     
          </ScrollView>
          </View>
           </Background>
   
 
)
}
}
export default Categories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // borderRadius: 20,

    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
  },
  imagecard: {
    resizeMode: "cover",
    //borderRadius: 80,
    margin: 10,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: "black",
    marginTop: 150,
    fontSize: 62,
    //fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  card: {
    //color: "white",
    borderRadius: 105,
    margin: 20,
    //padding: 20,
    //fontSize: 42,
    //fontWeight: "bold",
    //textAlign: "center",
    //borderBottomLeftRadius: 8,
    //borderBottomRightRadius: 8,
    // justifyContent: 'center',
    //backgroundColor: "#000000a0"
    borderWidth: 3,
    borderColor: "#000000",
  },


  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575d",
  },
  subText: {
    fontSize: 12,
    color: "#aeb5bc",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34ffb9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    //backgroundColor: "#41444b",
    //position: "absolute",
    bottom: 0,
    right: 0,
    //width: 200,
    height: 200,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  recentItemIndicator: {
    backgroundColor: "#CADFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },


});