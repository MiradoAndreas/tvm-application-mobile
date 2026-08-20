import { ProgramCard } from "@/componennts/home/program-card";
import { LivePlayer } from "@/componennts/video-player";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import "../../global.css";

const programs = [
  { time: "08:00", title: "Journal Matinal", category: "Information" },
  { time: "10:00", title: "Culture Malagasy", category: "Culture" },
  { time: "12:00", title: "Journal de Midi", category: "Information" },
];

const style = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    objectFit: "contain",
  },
});

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#090909]">
      <View className="px-5 pb-10 pt-16">
        <View className="mb-7 flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
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
          <Text className="text-xl font-bold text-white">En direct</Text>
          <Text className="mt-1 text-sm text-zinc-500">
            Télévision Malagasy
          </Text>
        </View>

        <Text className="mb-4 mt-8 text-xl font-bold text-white">
          Programmes
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {programs.map((program) => (
            <ProgramCard key={program.time} {...program} />
          ))}
        </ScrollView>

        <Text className="mb-4 mt-8 text-xl font-bold text-white">À venir</Text>

        <View className="rounded-2xl bg-zinc-900 p-5">
          <Text className="text-sm text-red-500">14:00</Text>
          <Text className="mt-1 text-lg font-bold text-white">
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
