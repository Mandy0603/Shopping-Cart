import * as actions from "../actions";
import * as types from "../actionTypes";

describe("filters actions", () => {
  it("should return expected payload", () => {
    const text = "L";
    const expectedAction = {
      type: "UPDATE_FILTER",
      payload: text
    };
    expect(actions.updateFilters(text)).toEqual(expectedAction);
  });
});
