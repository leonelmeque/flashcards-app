import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  
} from "react-native";
import { styles,Button } from "../shared/style";
import { pushDeck } from "../../actions/decks";
import { connect } from "react-redux";

const NewDeck = (props) => {
  const [deckName, handleChange] = React.useState();

  const handleSubmit = () => {
    if (deckName) {
      console.log(deckName);
      props.dispatch(pushDeck(deckName));
      const title = deckName
      props.navigation.navigate('Deck',title)
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
      <Button color={'black'} onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Save</Text>
      </Button>
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

export default connect()(NewDeck);
