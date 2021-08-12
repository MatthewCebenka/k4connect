import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "./src/screens/Feed";

const navigator = createStackNavigator(
  {
    FeedScreen: Feed,
  },
  {
    initialRouteName: "FeedScreen",
    defaultNavigationOptions: {
      title: "Feed",
    },
  }
);

export default createAppContainer(navigator)