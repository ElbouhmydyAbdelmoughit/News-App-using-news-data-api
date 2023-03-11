import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { NewsData } from "../utils/Types";

const CardItem = (props: NewsData) => {
  return (
    <Pressable style={styles.conatiner}>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: props.image_url }}
          style={{ shadowColor: "#FFFFFF" }}
        />
        <Card.Title
          title={props.title}
          subtitle={props.description}
        ></Card.Title>
        <Card.Content>
          {/* <Text style={{color:"white"}}> {props.content} </Text> */}
        </Card.Content>
      </Card>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  card: {
    marginVertical: 10,
  },
});
