import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Should generate set text filter action object", () => {
  const action = setTextFilter("New text filter");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "New text filter"
  });
});

test("Should generate sortByAmount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("Should generate sortByDate action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});