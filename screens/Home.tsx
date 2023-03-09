// @ts-nocheck

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Chip, Button, useTheme } from "react-native-paper";
import { NewsData } from "../utils/Types";
import CardItem from "../components/CardItem";

const categories = ["Technology", "Sports", "Politics", "Health", "Business"];
const API_KEY = "pub_18477212e751dc38cb21c5c2176e532c458f3";

const Home = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const theme = useTheme();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleSelect = (val: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.find((p) => p === val)
        ? prev.filter((cat) => cat !== val)
        : [...prev, val]
    );
  };
  const handleRefresh = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ca,fr,de,ma,kp&language=en${
      selectedCategories.length > 0 && `&category=${selectedCategories.join()}`
    }`;
    console.log(URL);
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => setNewsData(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(newsData.length > 0 ? Object.keys(newsData[0]) : []);
  console.log(newsData);

 return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filterContainer}>
        {categories.map((caterogy) => (
          <Chip
            key={caterogy}
            style={styles.chipItem}
            mode="outlined"
            textStyle={{
              color: "white",
              fontWeight: "400",
              padding: 1,
            }}
            showSelectedOverlay
            selected={
              selectedCategories.find((c) => caterogy === c) ? true : false
            }
            onPress={() => handleSelect(caterogy)}
          >
            {caterogy}
          </Chip>
        ))}
        <Button
          mode="contained-tonal"
          style={styles.button}
          labelStyle={{ fontSize: 14, color: theme.colors.primary }}
          icon={"sync"}
          onPress={handleRefresh}
        >
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
    marginHorizontal: 3,
    justifyContent: "space-between",
  },
  chipItem: {
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
});