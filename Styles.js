import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  display: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  displayText: {
    fontSize: 60,
  },
  buttons: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    minWidth: 90,
    minHeight: 75,
  },
});
