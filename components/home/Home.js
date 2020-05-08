import React from "react";
import { Text, View,SafeAreaView } from "react-native";
import Deck from "../decks/Deck";
import {styles} from '../shared/style';

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Deck />
      </SafeAreaView>
    );
  }
}

export default Home;
