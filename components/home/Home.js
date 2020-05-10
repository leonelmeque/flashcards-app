import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import DeckList from "../decks/DeckList";
import Deck from '../decks/Deck'
import NewCard from '../decks/NewCard';

import { connect } from "react-redux";
import Quiz from '../quiz/Quiz';

import { createStackNavigator } from "@react-navigation/stack";
import { persistStore, persistCombineReducers } from "redux-persist";
const Stack = createStackNavigator();

export function HomeStack() {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DeckList} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="Add Card" component={NewCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

class Home extends React.Component {
  componentDidMount() {
    //_clearStorage();
   persistStore(this.props).purge();
  }
  render() {
    return <HomeStack />;
  }
}

export default connect()(Home);
