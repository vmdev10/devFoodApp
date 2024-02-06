import { Header } from "@components/header";
import React from "react";

import { View } from "react-native";

const Home = () => {
  return (
    <View className="pt-8 flex-1 px-4">
      <Header title="Faça seu pedido" cartItemsQuantity={1} />
    </View>
  );
};

export default Home;
