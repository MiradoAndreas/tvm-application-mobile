import { ProgramCard } from "@/componennts/home/program-card";
import { LivePlayer } from "@/componennts/video-player";
import { useTheme } from "@/context/ThemeContext";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import "../../../global.css";

const programs = [
  { time: "08:00", title: "Journal Matinal", category: "Information" },
  { time: "10:00", title: "Culture Malagasy", category: "Culture" },
  { time: "12:00", title: "Journal de Midi", category: "Information" },
];

const style = StyleSheet.create({
  image: {
    width: 78,
    height: 36,
    objectFit: "contain",
  },
});

export default function HomeScreen() {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView className={`flex-1 ${isDarkMode ? 'bg-[#090909]' : 'bg-white'}`}>
      <View className="px-5 pb-10 pt-6">
        <View className="mb-7 flex-row items-center justify-between">
          <View>
            <Image
              source={require("@/assets/images/tvm-logo.png")}
              style={style.image}
            />
          </View>

          <View className="flex-row items-center">
            <View className="mr-2 h-2 w-2 rounded-full bg-red-500" />
            <Text className="text-xs font-bold text-red-500">EN DIRECT</Text>
          </View>
        </View>

        <LivePlayer />

        <View className="mt-7">
          <Text className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>En direct</Text>
          <Text className="mt-1 text-sm text-zinc-500">
            Télévision Malagasy
          </Text>
        </View>

        <Text className={`mb-4 mt-8 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Programmes
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {programs.map((program) => (
            <ProgramCard key={program.time} {...program} />
          ))}
        </ScrollView>

        <Text className={`mb-4 mt-8 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>À venir</Text>

        <View className={`rounded-2xl p-5 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
          <Text className="text-sm text-red-500">14:00</Text>
          <Text className={`mt-1 text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Magazine TVM
          </Text>
          <Text className="mt-1 text-sm text-zinc-500">
            Actualités et société
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
