import React from "react";
import renderer from "react-test-renderer";

import Feed from "../Feed";

describe("<Feed />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Feed />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Feed />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Feed />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
