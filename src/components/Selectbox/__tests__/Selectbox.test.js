import React from "react";
import { mount } from "enzyme";
import Selectbox from "../";

let wrapped;

const optionsMock = [
  { value: "", label: "Select" },
  { value: "lowestprice", label: "Lowest to highest" },
  { value: "highestprice", label: "Highest to lowest" }
];

beforeEach(() => {
  wrapped = mount(
    <Selectbox options={optionsMock} handleOnChange={() => {}} />
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("mount with 3 options element", () => {
  expect(wrapped.find("option").length).toEqual(3);
});
