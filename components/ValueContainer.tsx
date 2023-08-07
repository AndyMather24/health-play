import React from "react";
import { View, StyleSheet, Text } from "react-native";

type props = {
  label: string;
  value: string;
};

function ValueContainer({ label, value }: props): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}> {value}</Text>
      </View>
    </>
  );
}

export default ValueContainer;

const styles = StyleSheet.create({
  container: {
    // columnGap: 5,
  },

  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    color: "#AFB3BE",
    fontSize: 35,
  },
});
