import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginRight: 100,
        }}
      >
        <Icon name={"account-circle"} size={70} color="white" />
        <View style={{ marginTop: 7 }}>
          <Text style={{ color: "white", fontSize: 22 }}>Adam Rodrigues</Text>
          <Text style={{ color: "grey", fontSize: 16 }}>+91 7507488321</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <View style={styles.option}>
          <Icon name={"account-circle"} size={28} color="white" />
          <Text style={styles.optionText}>Account</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"link"} size={28} color="white" />
          <Text style={styles.optionText}>Linked devices</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"favorite"} size={28} color="white" />
          <Text style={styles.optionText}>Donate to Signal</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <View style={styles.option}>
          <Icon name={"wb-sunny"} size={28} color="white" />
          <Text style={styles.optionText}>Appearence</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"chat-bubble"} size={28} color="white" />
          <Text style={styles.optionText}>chats</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"notifications"} size={28} color="white" />
          <Text style={styles.optionText}>Notifications</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"lock"} size={28} color="white" />
          <Text style={styles.optionText}>lock</Text>
        </View>
        <View style={styles.option}>
          <Icon name={"folder"} size={28} color="white" />
          <Text style={styles.optionText}>Data and storage</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <View style={styles.option}>
          <Icon name={"credit-card"} size={28} color="white" />
          <Text style={styles.optionText}>payments</Text>
        </View>
        
      </View>

      <View style={styles.divider}></View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <View style={styles.option}>
          <Icon name={"help"} size={28} color="white" />
          <Text style={styles.optionText}>Help</Text>
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2d2d2d",
  },
  optionText: {
    color: "white",
    marginTop: 5,
    marginLeft: 30,
    fontSize: 14,
    fontWeight: "bold",
  },
  option: {
    marginBottom: 20,
    flexDirection: "row",
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    height: 2,
    backgroundColor: "grey",
  },
});
