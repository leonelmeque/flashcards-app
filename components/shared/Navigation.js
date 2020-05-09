import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/Home";
import NewDeck from "../decks/NewDeck";
import About from "../about/About";
import { primaryColor, textColor } from "../shared/style";

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: textColor,
        activeBackgroundColor: primaryColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen name="New Deck" component={NewDeck} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
