import React from "react";
import { mount } from "enzyme";

import Sort from "../";
import Root from "../../../../Root";

const initialState = {
  sort: {
    type: "highestprice"
  }
};

it("mount without crashing", () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Sort />
    </Root>
  );
  wrapped.unmount();
});
