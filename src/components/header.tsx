import React from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export type HeaderProps = {
  title: string;
  cartItemsQuantity?: number;
};

export const Header = ({ title, cartItemsQuantity = 0 }: HeaderProps) => {
  return (
    <View className="flex-row justify-between">
      <View>
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />

        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartItemsQuantity > 0 && (
        <TouchableOpacity className=" relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">
              {cartItemsQuantity}
            </Text>
          </View>

          <Feather name="shopping-bag" size={24} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};
