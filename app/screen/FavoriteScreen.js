import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/typo/AppText";
import colors from "../config/color";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Recipe data with id
const recipes = [
  {
    id: "1",
    title: "Homemade Pizza",
    category: "Dinner",
    ingredients: ["Dough", "Tomato Sauce", "Cheese", "Toppings of your choice"],
    instructions:
      "1. Roll out the dough. 2. Spread tomato sauce. 3. Add cheese and toppings. 4. Bake in the oven.",
    image: "https://example.com/pizza.jpg",
    duration: 45,
    difficulty: "Intermediate",
  },
  {
    id: "2",
    title: "Avocado Toast",
    category: "Breakfast",
    ingredients: [
      "2 slices of bread",
      "1 ripe avocado",
      "Salt",
      "Pepper",
      "Optional: poached egg",
    ],
    instructions:
      "Toast bread. Mash avocado and spread it on the toast. Add salt and pepper. Optional: top with a poached egg.",
    image: "https://example.com/avocado_toast.jpg",
    duration: 15,
    difficulty: "Easy",
  },
  // Add more recipes as needed
  // ...
];

// Generate additional recipes to make at least 9
for (let i = 3; i <= 9; i++) {
  recipes.push({
    id: i.toString(),
    title: `Recipe ${i}`,
    category: "Other",
    ingredients: [
      `Ingredient ${i}_1`,
      `Ingredient ${i}_2`,
      `Ingredient ${i}_3`,
    ],
    instructions: `Instructions for Recipe ${i}.`,
    image: `https://example.com/recipe_${i}.jpg`,
    duration: 30,
    difficulty: "Medium",
  });
}

const RecipeItem = ({ item }) => {
  return (
    <View
      style={{
        width: "50%",
        padding: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "white",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <AppText
        value={item.title}
        color={colors["fire-engine-red"]}
        size={15}
        bold={true}
      />
      <AppText value={item.category} color={"gray"} size={13} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <AppText value={item.duration + " min"} color={"gray"} size={15} />
        <AppText value={item.difficulty} color={"gray"} size={12} />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Booked", item);
        }}
        style={{
          backgroundColor: colors["fire-engine-red"],
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText value={"Book"} color={"white"} size={15} bold={true} />
      </TouchableOpacity>
    </View>
  );
};

const RecipeScreen = () => {
  const handleBook = (item) => {
    console.log("Booked", item);
  };
  return (
    <View>
      <FlatList
        data={recipes}
        style={{ padding: 10 }}
        keyExtractor={(recipe) => recipe.id}
        numColumns={2}
        renderItem={({ item }) => (
          <RecipeItem onPress={handleBook} item={item} />
        )}
      />
    </View>
  );
};

const BookScreen = () => {
  return (
    <View>
      <AppText
        value={"Book"}
        color={colors["fire-engine-red"]}
        size={20}
        bold={true}
      />
    </View>
  );
};

export const TopNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  const screensArray = [
    {
      name: "Recipe",
      component: RecipeScreen,
    },
    {
      name: "Book",
      component: BookScreen,
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors["fire-engine-red"],
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors["fire-engine-red"],
        },

        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }}
    >
      {screensArray.map((screen, index) => (
        <Tab.Screen
          name={screen.name}
          key={index}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const FavoriteScreen = () => {
  return <Screen></Screen>;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
