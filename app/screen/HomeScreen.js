import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { MaterialCommunityIcons as Mat } from "@expo/vector-icons";
import AppText from "../components/typo/AppText";
import colors from "../config/color";

const ProfileTop = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View>
        <Mat name="account" size={30} color="black" />
      </View>
      <View>
        <AppText value={name} size={20} color="black" />
      </View>
    </View>
  );
};
const HomeScreen = () => {
  const recipesCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Desserts",
    "Drinks",
  ];
  const [activeCategory, setActiveCategory] = React.useState("Breakfast");

  return (
    <Screen>
      <View
        style={{
          width: "100%",
          height: "100%",
          gap: 20,
          padding: 20,
        }}
      >
        <View>
          <ProfileTop name="John Doe" />
        </View>
        <View>
          <AppText
            value="What do you want to eat today?"
            size={25}
            color={colors["fire-engine-red"]}
          />
          <FlatList
            horizontal
            data={recipesCategories}
            style={{ marginTop: 20 }}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    borderColor: colors["fire-engine-red"],
                    marginRight: 10,
                    borderRadius: 15,
                    backgroundColor:
                      activeCategory === item
                        ? colors["fire-engine-red"]
                        : "transparent",
                  }}
                >
                  <AppText
                    value={item}
                    size={15}
                    color={activeCategory === item ? "white" : "gray"}
                    onPress={() => {
                      setActiveCategory(item);
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
