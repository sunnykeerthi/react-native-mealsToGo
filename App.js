// import { StatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexGrow: 0,
          flexShrink: 1,
          backgroundColor: "green",
          padding: 16,
        }}
      >
        <Text>Search</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          backgroundColor: "blue",
          padding: 16,
        }}
      >
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
