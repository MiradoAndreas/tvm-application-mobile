import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AboutScreen() {
  const { isDarkMode } = useTheme();

  return (
    <View className={`flex-1 px-6 pt-8 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Text className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        À propos de TVM
      </Text>

      <Text className={`text-base mb-8 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
        Application de diffusion en direct de la Télévision Malagasy.
      </Text>

      <Text className={`text-center text-xs mt-auto ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
        Version 1.0.0
      </Text>
    </View>
  );
}