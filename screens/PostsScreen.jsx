import { Image, Text } from "react-native";
import TabNavigation, { FocusedIcon } from "../components/TabNavigation";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../globalStyles";
export const PostsScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ flex: 1, gap: 8, flexDirection: "row" }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#F6F6F6",
            borderRadius: 16,
          }}
        >
          <Image source={require("../assets/images/user.png")} />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              lineHeight: 15.23,
              fontSize: 13,
            }}
          >
            Natali Romanova
          </Text>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              lineHeight: 12.89,
              fontSize: 11,
              color: "#212121CC",
            }}
          >
            email@example.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
