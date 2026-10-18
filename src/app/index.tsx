import { StyleSheet, View } from "react-native";
import BatteryExample from "../../components/battery/battery-example";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <BasicNetworkType /> */}
      {/* <NetworkListner /> */}
      {/* <NetworkDetails /> */}
      {/* <BasicLinking /> */}
      {/* <DeepLinking /> */}
      {/* <PressHaptics /> */}
      {/* <App /> */}
      <BatteryExample />
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
