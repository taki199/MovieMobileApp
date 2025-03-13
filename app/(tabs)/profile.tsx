import { icons } from "@/constants/icons";
import { images } from "@/constants/images"; // Make sure to import images
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <Image
        source={images.bg}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      <SafeAreaView className="flex-1 px-10 bg-transparent">
        <View className="flex justify-center items-center flex-1 flex-col gap-5 bg-transparent">
          <Image source={icons.person} className="size-10" tintColor="#fff" />
          <Text className="text-gray-500 text-base">Profile</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
