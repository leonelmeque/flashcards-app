import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../shared/style";
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
            return (
              <TouchableOpacity
                style={styles.deck}
                key={obj.title}
                onPress={() => navigation.navigate("Deck", obj.title)}
              >
                <Text>{obj.title}</Text>
                <Text>
                  {obj.questions.length === 1
                    ? obj.questions.length + " Card "
                    : obj.questions.length + " Cards "}
                </Text>
              </TouchableOpacity>
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
