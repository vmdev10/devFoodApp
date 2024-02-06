// Arquivo para definir as configurações de navegação
import React from "react";
// Slot, vai trazer todas as rotas
import { Slot } from "expo-router";
// SafeAreaView, semelhante a View, mas escapa de detalhes físicos nativos;
import { SafeAreaView } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "@components/loading";

const Layout = () => {
  // useFonts -> Usado para carregar as fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
