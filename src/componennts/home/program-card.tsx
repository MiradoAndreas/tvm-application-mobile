import { View, Text } from "react-native";

type Props = {
  time: string;
  title: string;
  category: string;
};

export function ProgramCard({ time, title, category }: Props) {
  return (
    <View className="mr-3 w-40 rounded-2xl bg-zinc-900 p-4">
      <Text className="text-sm font-semibold text-red-500">{time}</Text>
      <Text className="mt-3 text-base font-bold text-white">{title}</Text>
      <Text className="mt-1 text-xs text-zinc-500">{category}</Text>
    </View>
  );
}
