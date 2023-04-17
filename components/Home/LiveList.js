import { View, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import data from "../../data/livesData.js";

const LiveList = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        key={item.id}
        style={{ marginHorizontal: 20, backgroundColor: "rgb(20,20,20)" }}
        className="w-[90%] overflow-hidden justify-around flex-row-reverse items-center mt-2 p-2"
      >
        <View className="flex-col items-start mt-2">
          <Text className="text-white text-sm">@{item.creator}</Text>
          <View className="h-[1px] w-full my-2 bg-black"></View>
          <Text className="text-white text-xs">{item.title}</Text>

          <View className="mt-2 w-40 h-5 overflow-x-scroll flex flex-row">
            {item.keys.map((key, index) => (
              <Text
                key={index}
                style={{ fontSize: 10, backgroundColor: "rgb(30,30,30)" }}
                className="text-white mx-[1px] px-2 py-[2px] font-medium rounded-full"
              >
                {key}
              </Text>
            ))}
          </View>
        </View>
        <Image
          className="rounded-sm bg-cover"
          style={{
            height: 100,
            width: 150,
            margin: 0,
          }}
          source={{
            uri: item.thumbnail,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{ flex: 3, backgroundColor: "rgb(12,12,12)", paddingVertical: 20 }}
    >
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        emptyListText="No live sessions available at the moment"
        estimatedItemSize={500}
      />
    </View>
  );
};
export default LiveList;
