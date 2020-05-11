import React from "react";
import DeckList from "../decks/DeckList";
import Deck from "../decks/Deck";
import NewCard from "../decks/NewCard";
import { connect } from "react-redux";
import Quiz from "../quiz/Quiz";
import { initializeData } from "../../actions/shared";
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
    if (this.props.appData === true) {
      this.props.dispatch(initializeData());
    }
  }
  render() {
    return <HomeStack />;
  }
}
const mapStateToProps = ({ decks }) => {
  const appData = Object.entries(decks).length === 0 ? true : false;
  return {
    appData,
  };
};
export default connect(mapStateToProps)(Home);
