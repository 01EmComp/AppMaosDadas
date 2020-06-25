import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import Cidade from "./pages/Cidade";
import Detalhes from "./pages/Detalhes";
import Produtores from "./pages/Produtores";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Cidade" component={Cidade} />
        <AppStack.Screen name="Produtores" component={Produtores} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
