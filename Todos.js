import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styled from "styled-components/native";
import Counter from "./Counter";

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24;
`;

const InputConatiner = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 15;
`;

const Todos = () => {
  const [term, setTerm] = useState("");
  const [todos, setTodos] = useState([
    { id: new Date(), text: "Eat Breakfast" },
  ]);

  const handleChange = (value) => {
    setTerm(value);
  };

  const handleSubmit = () => {
    const newTodos = { id: new Date(), text: term };
    setTodos((todos) => [...todos, newTodos]);
    setTerm("");
  };
  console.log(todos);
  return (
    <Conatiner>
      <Title>Todos</Title>
      <InputConatiner>
        <TextInput
          placeholder="Enter Todos"
          style={{ width: "50%", height: 30 }}
          onChangeText={handleChange}
          value={term}
        />
        <Button title="Add" onPress={handleSubmit} />
      </InputConatiner>
      <View>
        {todos.map((todo) => (
          <Text key={todo.id}>{todo.text}</Text>
        ))}
      </View>
      <Counter />
    </Conatiner>
  );
};

export default Todos;
