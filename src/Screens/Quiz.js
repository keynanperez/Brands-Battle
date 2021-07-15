import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { Button, ButtonContainer } from "../components/Button";
import Alert from "../components/Alert";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

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
    answerCorrect: false,
    shuffeled:[],
  };


  

   shuffle=(array)=> {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
      this.state.shuffeled=array
    }
    return array;
  }
 
  
  nextQuestion = () => {
    this.setState(state => {
      
      const nextIndex = this.state.activeQuestionIndex + 1;
      this.state.timer=60;
      if (nextIndex >= state.totalCount) {
        return this.props.navigation.navigate('endgame')
       // return this.props.navigation.popToTop();
      }
  
      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

 answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      
      () => { setTimeout(() => this.nextQuestion(), 1000);}
    );
  };

  OnEndTime=() => {

    this.nextQuestion();
    return [true, 1000];
  }

  render() {
   

    const questions =this.props.navigation.state.params.questions// []);//this.props.navigation.state.param.questions;
    const question = questions[this.state.activeQuestionIndex];
    var answers=questions[this.state.activeQuestionIndex].answers;
    answers=this.shuffle(answers);
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <Text className="timer">Too lale...</Text>;
  }

  return (
    <View className="timer">
      <Text className="text">Remaining</Text>
      <Text className="value">{remainingTime}</Text>
      <Text className="text">seconds</Text>
    </View>
  );
};
    
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
            
          <View className="timer-wrapper" style={{paddingLeft:'28%',paddingBottom:'15%'}}>
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => this.OnEndTime()}
        >
          {renderTime}
        </CountdownCircleTimer>
      </View>

            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>

          </View>
          <Alert
            correct={this.state.answerCorrect}
            visible={this.state.answered}
            ></Alert>
          <Text style={styles.text}></Text>
      
          <Button rounded text='SKIP' onPress={() => this.OnEndTime()}/>
    
         
        </SafeAreaView>
       
      </View>
      
    );
  }
}

export default Quiz;
