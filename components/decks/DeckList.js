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
      <ScrollView style={{ flex: 1 }}>
        {Object.values(decks).map((obj) => {
          return (
            <TouchableOpacity style={styles.deck} key={obj.title} onPress={()=>navigation.navigate('Deck', obj.title)}>
              <Text>{obj.title}</Text>
              <Text>
               
              </Text>
            </TouchableOpacity>
          );
        })}
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
