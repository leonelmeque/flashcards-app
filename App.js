import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navigation from "./components/shared/Navigation";
import { primaryColor } from "./components/shared/style";
import { getDecks } from "./utils/utils";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  
    console.log(  getDecks().then(data=>JSON.stringify(data)))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={primaryColor} barStyle="dark-content" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    );
  }
}
