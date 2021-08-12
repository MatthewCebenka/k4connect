import React from "react";
import { View, FlatList } from "react-native";
import PostDetail from "./PostDetail";

const PostList = ({ results }) => {
  
  return (
    <View >
      <FlatList
        data={results}
        keyExtractor={(result) => result.id.toString()}
        renderItem={({ item }) => {
          return <PostDetail result={item} />
        }}
      />
    </View>
  );
};

export default PostList;