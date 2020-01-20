import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView
} from "react-native";
import ButtonStyle from "../Button/ButtonStyle";
import Sounds from "../Sounds";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from "semantic-ui-react";

export default class ButtonList extends Component {
  constructor() {
    super();
  }

  handleAudio = e => {
    e.preventDefault();
  };

  render() {
    const numColumns = 4;
    const size = Dimensions.get("window").width / numColumns;
    const styles = StyleSheet.create({
      itemContainer: {
        width: size,
        height: size
      },
      item: {
        flex: 1,
        margin: 3,
        backgroundColor: "lightblue",
        color: "black"
      }
    });
    return (
      <>
        <SafeAreaView>
          <Text>
            <FlatList
              data={Sounds}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <ButtonStyle title={Sounds.title} mp3={Sounds.mp3} />
                  {/* <Text style={styles.item}>{item.title}</Text> */}
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={numColumns}
            />
            );
          </Text>
        </SafeAreaView>
      </>
    );
  }
}
