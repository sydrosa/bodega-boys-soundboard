import React from "react";
import { Button, Text } from "react-native";

const ButtonStyle = props => {
  console.log(props);
  return (
    <>
      <Button title={props.title} onClick={props.handleAudio}>
        <Text>{props.title}</Text>
      </Button>
    </>
  );
};

export default ButtonStyle;
