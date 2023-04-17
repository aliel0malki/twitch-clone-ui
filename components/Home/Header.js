import { View, Text } from "react-native";

const Header = () => {
  return (
    <View className="flex-1">
      <Text className="text-white mt-6 mr-4 text-5xl font-bold">Following</Text>
      <View>
        <Text className="mt-2 mr-4 text-lg opacity-90 text-white">
          Channels Recommended For You!
        </Text>
      </View>
    </View>
  );
};
export default Header;
