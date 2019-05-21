import React from "react";
import { mount } from "enzyme";

import ShelfHeader from "../";
import Root from "../../../../Root";
import Sort from "../../Sort";

it("shows a sort component", () => {
  const wrapped = mount(
    <Root>
      <ShelfHeader productsLength={10} />
    </Root>
  );
  expect(wrapped.find(Sort).length).toEqual(1);
  wrapped.unmount();
});
