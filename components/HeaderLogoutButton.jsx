import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const HeaderLogoutButton = () => {
    const handleLogOut = () => {

    }
    return (
      <TouchableOpacity onPress={handleLogOut}>
        <Icon
          name="logout"
          size={24}
          color="grey"
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    );
}