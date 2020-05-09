import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../shared/style";
import { connect } from "react-redux";

class Deck extends React.Component {
  render() {
    const { deck, navigation } = this.props;
    if (deck===null) {
      return null;
    }
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>{deck.title}</Text>
        
        <Text>
          {deck.questions.length === 1
            ? deck.questions.length + " Card "
            : deck.questions.length + " Cards "}
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Add Card',deck.title)}>
            <Text style={{color:'white'}}>
                Add Card
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white'}}>
                Start Quiz
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, navigation) => {
  const deck = decks[navigation.route.params];
  console.log(deck);
  return {
    deck,
  };
};
export default connect(mapStateToProps)(Deck);
