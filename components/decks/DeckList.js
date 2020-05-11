import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { styles, DeckStyle, DeckButton } from "../shared/style";
import { connect } from "react-redux";

class Deck extends React.Component {
  render() {
    const { decks, navigation } = this.props;

    if (decks === null) {
      return;
    }
  

return (
      <ScrollView>
        <View style={styles.container}>
          {Object.values(decks).map((obj) => {
            const color = "#" + Math.random().toString(16).substr(-6);
            return (
              <DeckButton
                color={obj.color ? obj.color : color}
                key={obj.title}
                onPress={() => navigation.navigate("Deck", obj.title)}
              >
                <DeckStyle.Title color={"white"}>{obj.title}</DeckStyle.Title>
                <DeckStyle.SubTitle color={"white"}>
                  {obj.questions.length === 1
                    ? obj.questions.length + " Card "
                    : obj.questions.length + " Cards "}
                </DeckStyle.SubTitle>
              </DeckButton>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};
export default connect(mapStateToProps)(Deck);
