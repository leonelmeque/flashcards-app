import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "../shared/style";
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
    this.props.navigation.navigate('Home')
  }

  render() {
    const { deck } = this.props;

    return (
      <View>
        <Text>Question</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
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
          }}
          onChangeText={(text) => {
            this.handleText("answer", text);
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleSave(deck.title);
          }}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
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
