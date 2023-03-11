import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { NewsData } from "../utils/Types";

const CardItem = (props: NewsData) => {
  return (
    <View style={styles.conatiner}>
      <Card>
        <Card.Title
          title={props.title}
          subtitle="Card Subtitle"
          
        />
        <Card.Content>
          <Text>Card title</Text>
          <Text>Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: props.image_url }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
