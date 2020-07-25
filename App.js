import React from "react";
import Loader from "./Loader";
import * as Location from "expo-location";
import { Alert, Text } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "c4eee9d8edc069ad19d12fa428a7c27e";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    condition: "",
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      condition: data.weather[0].main,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
