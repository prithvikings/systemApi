import { StyleSheet, View } from "react-native";
import NetworkDetails from "../../components/nettwork-details";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <BasicNetworkType /> */}
      {/* <NetworkListner /> */}
      <NetworkDetails />
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
