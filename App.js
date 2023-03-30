import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/home/homeScreen";
import Settings from "./components/settings/settings";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false,  }}
        />
        <Stack.Screen name="Settings" component={Settings} options={{headerStyle: {backgroundColor: '#2d2d2d'}, navigationBarColor: '#2d2d2d', headerTintColor: 'white' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
}

const styles = StyleSheet.create({
 
});
