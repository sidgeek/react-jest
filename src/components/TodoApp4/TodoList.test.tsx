import React from "react";
// import { renderHook, act } from "@testing-library/react-hooks";
import { mount, shallow } from "enzyme";
import TodoList from "./TodoList";
import useTodoList from "./useTodoList";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("should add todo", () => {
  act(() => {
    ReactDOM.render(<TodoList />, container);
  });
  // const warpper = mount(<TodoList />);
  // // console.log(warpper.state("addTodo"));
  // act(() => {
  //   // console.log(warpper.state.addTodo(""));
  // });
  // addTodo()
  // console.log(wrapper);
  // const { result } = renderHook(() => useTodoList(["first task"]));
  // act(() => {
  //   result.current.addTodo("study jest");
  // });
  // expect(result.current.todoList).toEqual(["first task", "study jest"]);
});
