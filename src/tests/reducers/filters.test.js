import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set up sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set textFilter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SET_TEXT_FILTER", text: "new text test" };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe("new text test");
});

test("Should set startDate Filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const action = {
    type: "SET_START_DATE",
    startDate: moment().startOf("month")
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(moment().startOf("month"));
});

test("Should set endDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const action = {
    type: "SET_END_DATE",
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(moment().endOf("month"));
});