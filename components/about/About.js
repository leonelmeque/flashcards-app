import React from "react";
import { View, Text } from "react-native";
import { Container, Title, Paragraph } from "../shared/style";

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Title>About</Title>
        <Text>This app was develop by Leonel Meque</Text>
        <Text>For a project a Udacity React Native Project!</Text>
      </Container>
    );
  }
}
