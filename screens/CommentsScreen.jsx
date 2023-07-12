import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { globalStyles } from "../globalStyles";
import Comment from "../components/Comment";
import { ArrowUp } from "../components/icons/Icons";

export const CommentsScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {
          paddingTop: 32,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16,
          justifyContent: "space-between",
        },
      ]}
    >
      <View>
        <Image
          source={require("../assets/images/sunset.jpg")}
          resizeMode={"cover"}
          style={{
            width: "100%",
            height: 240,
            borderRadius: 8,
            marginBottom: 32,
          }}
        />
        <Comment
          img={require("../assets/images/comments-photo.png")}
          text={
            "Really love your most recent photo. I’ve been trying to capture thesame thing for a few months and would love some tips!"
          }
          date={"09 червня, 2020 | 08:40"}
        />
        <Comment
          img={require("../assets/images/comments-photo-user.png")}
          text={
            "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
          }
          direction={"row-reverse"}
          textAlign={"left"}
          date={"09 червня, 2020 | 09:14"}
        />
        <Comment
          img={require("../assets/images/comments-photo.png")}
          text={"Thank you! That was very helpful!"}
          date={"09 червня, 2020 | 09:20"}
        />
      </View>
      <View>
        <TextInput
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#F6F6F6",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 25,
            fontSize: 16,
            lineHeight: 19.36,
          }}
          placeholder="Коментувати..."
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            width: 34,
            height: 34,
            borderRadius: 17,
            backgroundColor: "#FF6C00",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowUp />
        </TouchableOpacity>
      </View>
    </View>
  );
};
