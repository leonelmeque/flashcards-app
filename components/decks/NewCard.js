import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles, ContainerFluid, Button } from "../shared/style";
import { connect } from "react-redux";
import { pushQuestion } from "../../actions/decks";
class NewCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
    };
  }

  handleText(value, text) {
    this.setState(() => ({
      [value]: text,
    }));
  }
  handleSave(id) {
    console.log(this.state);
    this.props.dispatch(pushQuestion(id, this.state));
    this.props.navigation.goBack("Deck");
  }

  render() {
    const { deck } = this.props;

    return (
      <ContainerFluid>
        <Text>Question</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            marginTop: 10,
          }}
          ref={this.inputOne}
          onChangeText={(text) => {
            this.handleText("question", text);
          }}
        />

        <Text>Answer</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            marginTop: 10,
          }}
          onChangeText={(text) => {
            this.handleText("answer", text);
          }}
        />

        <Button
          color={"black"}
          style={styles.button}
          onPress={() => {
            this.handleSave(deck.title);
          }}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </Button>
      </ContainerFluid>
    );
  }
}

const mapStateToProps = ({ decks }, navigation) => {
  const deck = decks[navigation.route.params];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(NewCard);
