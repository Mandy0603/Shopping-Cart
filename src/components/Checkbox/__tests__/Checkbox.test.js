import React from "react";
import { mount } from "enzyme";
import Checkbox from "..";

const label = "M";
let wrapped;

beforeEach(() => {
  wrapped = mount(<Checkbox label={label} handleCheckboxChange={() => {}} />);
});
afterEach(() => {
  wrapped.unmount();
});

it("should toggle isChecked state when input change", () => {
  const input = wrapped.find("input");

  expect(wrapped.state().isChecked).toEqual(false);
  input.simulate("change");
  expect(wrapped.state().isChecked).toEqual(true);
  input.simulate("change");
  expect(wrapped.state().isChecked).toEqual(false);
});

it("should have innerText equals label properties", () => {
  const text = wrapped.find("span").text();
  expect(text).toEqual(label);
});
