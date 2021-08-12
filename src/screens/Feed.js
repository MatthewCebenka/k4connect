import React from "react";
import { View, Text } from "react-native";
import results from '../../MOCK_DATA.json';
import PostList from "../components/PostList";

const Feed = () => {

  return (
    <View>
      <PostList results={results}/>
    </View>
  );
};

export default Feed;