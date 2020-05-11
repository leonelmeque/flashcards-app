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
import { styles, Button } from "../shared/style";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../../utils/helpers";

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
          <Text style={{ fontSize: 18 }}>Your Score is {props.score}</Text>
          <Button color={"black"} onPress={()=>{props.resetQuiz();}}>
            <Text style={{ color: "white", fontSize: 16 }}>Start Over </Text>
          </Button>
          <Button
            color={"black"}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Go Back To Deck{" "}
            </Text>
          </Button>
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

  componentDidMount() {
   
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
      clearLocalNotification().then(()=>setLocalNotification());
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

  alertMe(){
    console.log(this.state)
  }

  resetQuiz = () => {
    this.setState(()=>({
      showAnswer: false,
      points: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      answeredCardsControl: [],
      showModal: false,
      score: 0,
    }))
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

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
             
            }}
          >
            <ModalScore score={this.state.score} navigation={navigation} resetQuiz={this.resetQuiz} />
          </View>
        )}

        <ScrollView pagingEnabled={true} horizontal={true} style={{ flex: 1 }}>
          {questions.map((obj, index) => {
             
            return (
              <View
                style={{
                  flex: 1,

                  alignItems: "center",
                  padding: 20,
                  width: screenWidth,
                  backgroundColor: "#" + Math.random().toString(16).substr(-6),
                }}
                key={index}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    alignSelf: "flex-start",
                  }}
                >
                  {index + 1 + "/" + questions.length}
                </Text>
                <Text style={{ color: "white", fontSize: 25, marginTop: 20 }}>
                  {this.state.showAnswer ? obj.answer : obj.question}
                </Text>
                <TouchableOpacity
                  style={{ margin: 20 }}
                  onPress={() => this.handleShowAnswer()}
                >
                  <Text style={{ color: "red" }}>
                    {" "}
                    {this.state.showAnswer ? "Show Question" : "Show Answer"}
                  </Text>
                </TouchableOpacity>
                <Button
                  color={"black"}
                  style={styles.button}
                  onPress={() => {
                    this.updateScore("correctAnswers", index);
                  }}
                >
                  <Text style={{ color: "white" }}>Correct Answer</Text>
                </Button>
                <Button
                  color={"black"}
                  style={styles.button}
                  onPress={() => {
                    this.updateScore("wrongAnswers", index);
                  }}
                >
                  <Text style={{ color: "white" }}>Incorect Answer</Text>
                </Button>
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
