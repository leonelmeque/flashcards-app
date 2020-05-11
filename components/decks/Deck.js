import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles, DeckStyle, Button } from "../shared/style";
import { connect } from "react-redux";

class Deck extends React.Component {
  render() {
    const { deck, navigation } = this.props;
    if (deck === null) {
      return null;
    }

    return (
      <View style={{ flex: 1, padding: 20 }}>
        <DeckStyle.Title color={"black"}>{deck.title}</DeckStyle.Title>

        <Text>
          {deck.questions.length === 1
            ? deck.questions.length + " Card "
            : deck.questions.length + " Cards "}
        </Text>
        <Button
          color={"black"}
          onPress={() => navigation.navigate("Add Card", deck.title)}
        >
          <Text style={{ color: "white" }}>Add Card</Text>
        </Button>

        <Button
          color={"blue"}
          onPress={() => navigation.navigate("Quiz", deck.title)}
        >
          <Text style={{ color: "white" }}>Start Quiz</Text>
        </Button>
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
export default connect(mapStateToProps)(Deck);
