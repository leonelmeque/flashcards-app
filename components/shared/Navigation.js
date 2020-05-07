import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/Home";
import NewDeck from "../decks/NewDeck";
import About from '../about/About';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:'#ffffff',
        activeBackgroundColor:'#e91e63',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="New Deck" component={NewDeck} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
