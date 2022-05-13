import React, { FC, memo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const imgLink: string =
  "https://images.unsplash.com/photo-1553864250-05b20249ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const Card: FC = () => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: imgLink }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 6, padding: 6 }}>
        <Text style={styles.headline} numberOfLines={1}>This is heading</Text>
        <Text style={styles.body1} numberOfLines={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, fuga repellat deleniti dolore delectus laboriosam, ratione cupiditate perspiciatis autem, minus illum necessitatibus omnis eveniet expedita tenetur ducimus veniam aliquid. Maxime!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 100,
    padding: 6,
    elevation: 6,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#212121"
  },
  body1: {
    fontSize: 14,
    fontWeight: "400",
    color: "#adadad"
  }
});

export default memo(Card);
