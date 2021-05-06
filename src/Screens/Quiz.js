import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { Button, ButtonContainer } from "../components/Button";
import Alert from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F96B8",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Quiz extends React.Component {

  state = {
    correctCount: 0,
    totalCount:this.props.navigation.state.params.questions.length,//this,props.navigation.getParams('questions',[])
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  };

 

  render() {
   

    const questions =this.props.navigation.state.params.questions// []);//this.props.navigation.state.param.questions;
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor:this.props.navigation.state.params.color}
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question}</Text>

          
          </View>

          <Text style={styles.text}>
         
          </Text>
        </SafeAreaView>
       
      </View>
    );
  }
}

export default Quiz;
//<Alert
//correct={this.state.answerCorrect}
//visible={this.state.answered}
///>