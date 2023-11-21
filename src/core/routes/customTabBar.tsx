import React, { useState } from "react";
import { Pressable, View } from "react-native";
import {
  PanGestureHandler,
  type PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Texto,
  Wrapper,
  WrapperTab,
  WrapperTabBar,
} from "./CustomBottomTabs.styles";

const TabBar: React.FC = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <Wrapper insets={insets}>
      {state.routes.map(
        (route: { key: string; name: string }, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (route.name === "Report") {
            return null;
          }

          return (
            <WrapperTabBar key={index}>
              <Pressable onPress={onPress}>
                <WrapperTab>
                  <View>
                    {options.tabBarIcon?.({
                      focused: isFocused,
                      color: "",
                      size: 20,
                    })}
                  </View>
                </WrapperTab>
              </Pressable>
            </WrapperTabBar>
          );
        }
      )}
    </Wrapper>
  );
};

export default TabBar;
