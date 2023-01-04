import React from "react";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const { colors } = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color ? color : colors.text} />
    </Container>
  );
};

export default BackButton;
