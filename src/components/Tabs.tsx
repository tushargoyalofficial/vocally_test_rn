import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTabBtn from "./CustomTabBtn";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../containers/HomeScreen";
import SettingsScreen from "../containers/SettingsScreen";
import MapScreen from "../containers/MapScreen";
import NotificationsScreen from "../containers/NotificationsScreen";
import ProfileScreen from "../containers/ProfileScreen";

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const Tabs: FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: '#fff'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "ios-notifications-sharp"
                : "ios-notifications-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={styles.tabIcon}>
                <Ionicons name="add" size={30} color="white" />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBtn {...props} />,
          }}
        />
        <Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIcon: { alignItems: "center", justifyContent: "center" },
});

export default memo(Tabs);
