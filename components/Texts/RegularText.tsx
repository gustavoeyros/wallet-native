import React, { FunctionComponent } from "react";
import { styled } from "styled-components/native";
import { colors } from "../colors";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  font-family: "Lato-bold";
`;

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;
