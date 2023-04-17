import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderBar = () => {
  return (
    <View
      style={{ backgroundColor: "rgb(8,8,8)" }}
      className="justify-between flex-row-reverse pl-4 pb-4 items-center"
    >
      <TouchableOpacity
        style={{ backgroundColor: "#444" }}
        className="mt-10 rounded-[100px] text-white mr-4 flex-row-reverse items-center py-[10px] px-4"
      >
        <Text className="text-white font-[500] ml-1">Create</Text>
        <Ionicons name="wifi" size={24} color="white" />
      </TouchableOpacity>
      <View className="pt-10 flex-row-reverse pl-2 gap-4">
        <Ionicons name="chatbubble-ellipses-outline" size={30} color="white" />
        <Ionicons name="mail" size={30} color="white" />
        <View
          style={{ backgroundColor: "#7A45DB" }}
          className="py-1 px-3 mt-0 mt-0  rounded-full"
        >
          <Ionicons name="person" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
