import React from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles } from "../shared/style";
import{clearLocalNotification,setLocalNotification} from '../../utils/helpers'

function Dialog(props) {
  return Alert.alert(
    "Your score is " + props.score,
    "What do you want to do now?",
    [
      {
        text: "Do You Want To Start Over?",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Go Back To Deck Page",
        onPress: () => props.navigation.goBack(),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
}

function ModalScore(props) {
  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >


        <Text>Your Score is {props.score}</Text>
        <TouchableOpacity style={{ width: 50, margin: 10,backgroundColor:'black' }}>
          <Text style={{color:'white'}}>Start Over </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 50, margin: 10,backgroundColor:'black' }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Text style={{color:'white'}}>Go Back To Deck </Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

class Quiz extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
      points: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      answeredCardsControl: [],
      showModal: false,
      score: 0,
    };
  }
  handleShowAnswer() {
    this.setState((current) => ({
      showAnswer: !current.showAnswer,
    }));
  }

   componentDidMount(){
    clearLocalNotification().then(setLocalNotification);
  }

  checkProgress() {
    const {
      answeredCardsControl,
      correctAnswers,
      wrongAnswers,
      showModal,
    } = this.state;
    const { questions, navigation } = this.props;

    if (answeredCardsControl.length === questions.length) {
      this.setState(() => ({
        score: ((correctAnswers / questions.length) * 100).toFixed(2),
        showModal: !showModal,
      }));
    }
  }

  updateScore(value, index) {
    if (this.state.answeredCardsControl.indexOf(index) === -1) {
      this.setState(
        (current) => ({
          [value]: current[value] + 1,
          answeredCardsControl: current.answeredCardsControl.concat([index]),
        }),
        () => {
          this.checkProgress();
        }
      );
    } else {
      alert("You have already answered this question");
    }
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    console.log();
    const { questions, navigation } = this.props;

    if (questions.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            width: screenWidth,
          }}
        >
          <Text>Ups theres no cards here, Add cards or comeback later</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {this.state.showModal && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            <ModalScore score={this.state.score} navigation={navigation} />
          </View>
        )}

        <ScrollView pagingEnabled={true} horizontal={true} style={{ flex: 1 }}>
          {questions.map((obj, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                  width: screenWidth,
                }}
                key={index}
              >
                <Text>{index + 1 + "/" + questions.length}</Text>
                <Text>{this.state.showAnswer ? obj.answer : obj.question}</Text>
                <TouchableOpacity
                  style={{ margin: 20 }}
                  onPress={() => this.handleShowAnswer()}
                >
                  <Text style={{ color: "red" }}>Show Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateScore("correctAnswers", index);
                  }}
                >
                  <Text style={{ color: "white" }}>Correct Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateScore("wrongAnswers", index);
                  }}
                >
                  <Text style={{ color: "white" }}>Something else</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, navigation) => {
  const deck = decks[navigation.route.params];
  const questions = deck.questions;
  return {
    questions,
  };
};

export default connect(mapStateToProps)(Quiz);
