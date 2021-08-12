import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostDetail = ({ result }) => {
  return (
    <View
      style={{
        marginTop: 25,
        marginHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      }}
    >
      <Image
        style={{
          height: 150,
          width: 350,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 10,
        }}
        source={{
          uri: result.image,
        }}
      />
      <View style={{ marginBottom: 5, marginTop: 10, marginHorizontal: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "600",
            marginBottom: 5,
          }}
        >
          {result.author}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          {result.date}
        </Text>
        <Text style={{ color: "black", fontSize: 20, marginBottom: 5 }}>
          {result.title}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          {result.body}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});

export default PostDetail;
