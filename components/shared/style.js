import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  align-items: flex-start;
  padding: 20px;
`;

export const Label = styled.Text``;

export const Title = styled.Text`
  font-size: 30px;
  color: black;
  font-weight: 500;
`;

export const Paragraph = styled.Text`
  font-size: 0.7em;
  color: black;
`;

export const DeckStyle = {
  Title: styled.Text`
    font-size: 35px;
    color: ${(props) => props.color};
  `,

  SubTitle: styled.Text`
    font-size: 18px;
    color: ${(props) => props.color};
  `,
};

export const DeckButton = styled.TouchableOpacity`
  border-style: solid;
  border-color: black;
  border-radius: ${Platform.OS === "ios" ? "7px" : "0px"};
  padding: 20px;
  shadow-opacity: 0.4;
  shadow-color: black;
  background-color: ${(props) => props.color};
  shadow-offset: {
    height: 5;
  }
  width: 350px;
  height: 200px;
  margin-vertical: 10px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  padding: 10px;
  border-radius: ${Platform.OS === "ios" ? "5px" : "0px"};
  margin-vertical: 20px;
  background-color: ${(props) => props.color};
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});

export const ContainerFluid = styled.View`
  flex: 1;
  padding: 20px;
`;

/**
 * Colors
 */
export const primaryColor = "#F2E0D0";
export const secondaryColor = "#F2F2F2";
export const textColor = "#000000";
