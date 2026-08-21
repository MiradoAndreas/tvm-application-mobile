import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function DrawerWithTheme() {
  const { isDarkMode } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          },
          headerTintColor: isDarkMode ? '#ffffff' : '#000000',
          drawerStyle: {
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          },
          drawerActiveTintColor: '#3b82f6',
          drawerInactiveTintColor: isDarkMode ? '#ffffff' : '#000000',
        }}
      >
        <Drawer.Screen
          name="(drawer)"
          options={{ title: 'Accueil', drawerLabel: 'Accueil' }}
        />
        <Drawer.Screen
          name="login"
          options={{ title: 'Se connecter', drawerLabel: 'Se connecter' }}
        />
        <Drawer.Screen
          name="settings"
          options={{ title: 'Paramètres', drawerLabel: 'Paramètres' }}
        />
        <Drawer.Screen
          name="about"
          options={{ title: 'À propos', drawerLabel: 'À propos' }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <DrawerWithTheme />
    </ThemeProvider>
  );
}