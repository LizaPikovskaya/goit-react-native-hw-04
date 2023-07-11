import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { PostsScreen } from "../screens/PostsScreen";
import { UserIcon, PlusIcon, GridIcon } from "./icons/Icons";
import { StyleSheet, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            return (
              <View
                style={focused ? styles.focusIconWrapper : styles.iconWrapper}
              >
                <GridIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "CreatePosts") {
            return (
              <View
                style={
                  focused
                    ? styles.focusedPlusIconWrapper
                    : styles.iconPlusWrapper
                }
              >
                <PlusIcon fill={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View
                style={focused ? styles.focusIconWrapper : styles.iconWrapper}
              >
                <UserIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingLeft: 82,
          paddingRight: 82,
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >
      <Tab.Screen name={"Posts"} component={PostsScreen} />
      <Tab.Screen name={"CreatePosts"} component={CreatePostsScreen} />
      <Tab.Screen name={"Profile"} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    padding: 8,
  },
  iconPlusWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedPlusIconWrapper: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  focusIconWrapper: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    padding: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#FF6C00",
  },
});
