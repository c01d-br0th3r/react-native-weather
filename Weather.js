import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    colors: ["#c2c2c2", "#323232"],
  },
};

export default Weather = ({ temp, condition, navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].colors}
    >
      {/*<StatusBar barStyle="light-content" />*/}
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={84}
          color="#fff"
        />
        <Text style={styles.temp}>{temp} °C</Text>
        <Button
          title="Click"
          onPress={() => {
            navigation.navigate("Todos");
          }}
        />
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>Clouds</Text>
        <Text style={styles.subtitle}>We are boring</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "#fff",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 44,
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
  },
  textContainer: {
    alignItems: "flex-start",
  },
});
