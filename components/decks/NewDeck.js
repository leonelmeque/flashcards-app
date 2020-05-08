import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "../shared/style";
import { saveDeckTitle } from "../../utils/utils";

const NewDeck = (props) => {

  const [deckName,handleChange] = React.useState();

  const handleSubmit = () => {
    
    if (deckName) {
     saveDeckTitle(deckName);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>What is the title of your new deck?</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={(text) => handleChange(text)}
        value={deckName}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 18,
    width: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 50,
    justifyContent: "center",
  },
});

export default NewDeck;