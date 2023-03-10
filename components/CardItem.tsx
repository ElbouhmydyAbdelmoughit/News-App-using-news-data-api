import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NewsData } from "../utils/Types";

const CardItem = (props: NewsData) => {
  console.log({props})
  return (
    <View style={styles.conatiner}>
      <Text>{props.category}</Text>
      {/* <Text>{props.description}</Text> */}
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 5,
    paddingVertical:10,
    backgroundColor:"red"
  },
});
