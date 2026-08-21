import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function LoginScreen() {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          className={`flex-1 justify-center px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      >
        <Text className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Se connecter
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#6b6b6b"
          autoCapitalize="none"
          keyboardType="email-address"
          className={`rounded-xl px-4 py-3 mb-4 ${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-black'}`}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Mot de passe"
          placeholderTextColor="#6b6b6b"
          secureTextEntry
          className={`rounded-xl px-4 py-3 mb-6 ${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-black'}`}
        />
        <TouchableOpacity
          onPress={() => console.log('Email:', email, 'Password:', password)}
          className={`bg-blue-600 rounded-xl py-3 items-center ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}
        >
          <Text className="text-white font-bold text-base">Se connecter</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
  );
}
