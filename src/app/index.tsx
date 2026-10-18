import { StyleSheet, View } from "react-native";
import DeepLinking from "../../components/links/deep-linking";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <BasicNetworkType /> */}
      {/* <NetworkListner /> */}
      {/* <NetworkDetails /> */}
      {/* <BasicLinking /> */}
      <DeepLinking />
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
