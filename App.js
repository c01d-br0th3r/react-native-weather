import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherContainer from "./WeatherContainer";
import Todos from "./Todos";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";

const store = createStore(rootReducer);

const Stack = createStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Weather" component={WeatherContainer} />
          <Stack.Screen name="Todos" component={Todos} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
