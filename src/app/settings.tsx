import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
   <View className={`flex-1 px-6 pt-8 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <View className={`rounded-xl p-4 flex-row items-center justify-between ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
        <Text className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Mode sombre</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#6b6b6b', true: '#3b82f6' }}
            thumbColor="#ffffff"
        />
      </View>
    </View>
  );
}