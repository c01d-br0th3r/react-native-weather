import React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import counterAction from "./store/counterAction";
import styled from "styled-components";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const STouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
`;

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterAction.increase());
  };
  const handleDecrease = () => {
    dispatch(counterAction.decrease());
  };
  return (
    <Container>
      <Text>{counter}</Text>
      <STouchableOpacity>
        <Button title="+1" onPress={handleIncrease} />
        <Button title="-1" onPress={handleDecrease} />
      </STouchableOpacity>
    </Container>
  );
};

export default Counter;
