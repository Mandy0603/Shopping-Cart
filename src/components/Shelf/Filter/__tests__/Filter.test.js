import React from "react";
import { mount } from "enzyme";
import Filter from "../";
import Root from "../../../../Root";

const initialState = {
  filters: {
    items: ["X", "XS"]
  }
};

it("mounts without crashing", () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Filter />
    </Root>
  );
  wrapped.unmount();
});
