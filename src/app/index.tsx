import { StyleSheet, View } from "react-native";
import App from "../../components/haptics/example-2";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <BasicNetworkType /> */}
      {/* <NetworkListner /> */}
      {/* <NetworkDetails /> */}
      {/* <BasicLinking /> */}
      {/* <DeepLinking /> */}
      {/* <PressHaptics /> */}
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
