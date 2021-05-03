import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoinsScreen from "src/components/coins/CoinsScreen";
import CoinDetailScreen from "src/components/coinDetail/CoinDetailScreen"
import colors from "src/res/colors";

const Stack = createStackNavigator()

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white
      }}
    >
      <Stack.Screen
        name="Coins"
        component={CoinsScreen}
      />

      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default CoinsStack