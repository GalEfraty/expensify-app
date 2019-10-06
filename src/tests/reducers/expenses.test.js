import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: "4",
    description: "new expense test",
    note: "no note",
    amount: 700,
    createdAt: 0
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit expense", () => {
  const updates = {
    description: "description 1 update test"
  };
  const action = { type: "EDIT_EXPENSE", updates, id: "1" };
  const state = expensesReducers(expenses, action);
  expect(state[0].description).toBe("description 1 update test");
});

test("Should not edit expense if expense not found", () => {
  const updates = {
    description: "description no update test"
  };
  const action = { type: "EDIT_EXPENSE", updates, id: "-1" };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should set expenes", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[1]]);
});