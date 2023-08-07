import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ValueContainer from "./components/ValueContainer";
import RingProgess from "./components/RingProgess";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.RingContainer}>
        <RingProgess progress={0.75} />
      </View>

      <View style={styles.valuesContainer}>
        <ValueContainer label="Steps" value="1232" />
        <ValueContainer label="Distance" value="10km" />
        <ValueContainer label="Flights" value="10" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 12,
  },
  RingContainer: {
    flex: 0.5,
  },
  valuesContainer: {
    flexDirection: "row",
    gap: 45,
    flexWrap: "wrap",
  },
});
