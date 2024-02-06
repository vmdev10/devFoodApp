import { CategoryButton } from "@components/categoryButton";
import { Header } from "@components/header";
import { Separator } from "@components/separator";

import { FlatList, View } from "react-native";

import { CATEGORIES } from "@utils/data/products";
import { useState } from "react";

const Home = () => {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <View className="pt-8 flex-1 px-4">
      <Header title="Faça seu pedido" cartItemsQuantity={1} />

      <Separator />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={categorySelected === item}
            onPress={() => setCategorySelected(item)}
          />
        )}
        contentContainerStyle={{ gap: 12 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Home;
