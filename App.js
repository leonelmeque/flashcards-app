import React from "react";
import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import Navigation from "./components/shared/Navigation";
import { primaryColor } from "./components/shared/style";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { ConfigureStore } from "./utils/store";


const { persistor, store } = ConfigureStore();

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

class App extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{ flex: 1 }}>
            <AppStatusBar
              backgroundColor={primaryColor}
              barStyle="dark-content"
            />
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
