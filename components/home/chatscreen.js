import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ChatScreen() {
  const contacts = [
    {
      pp: "account-circle",
      name: "Adam",
    },
    {
      pp: "account-circle",
      name: "Joselito",
    },
    {
      pp: "account-circle",
      name: "Omkar",
    },
    {
      pp: "account-circle",
      name: "Glaven",
    },
    {
      pp: "account-circle",
      name: "Khushal",
    },
    {
      pp: "account-circle",
      name: "Craige",
    },
  ];

  return (
    <View style={{ marginTop: 0 }}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.contactView}>
            <TouchableHighlight>
              <View style={{ flexDirection: "row", gap: 12 }}>
                <Icon name={item.pp} size={45} color="white" />
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "grey", fontSize: 14 }}>
                    {item.name} has joined Signal
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contactView: {
    margin: 10,
    marginTop: 20,
  },
});
