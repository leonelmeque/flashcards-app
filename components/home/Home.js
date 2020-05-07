import React from "react";
import { Text, View } from "react-native";
import Deck from "../decks/Deck";

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Page</Text>
        <Deck />
      </View>
    );
  }
}

export default Home;
