import React from "react";
import { TODOS_ACTIONS } from "./reduxCounter";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <span>{todo?.name}</span>
      <button
        onClick={dispatch({
          type: TODOS_ACTIONS.TOGGLE,
          payload: { id: todo?.id }
        })}
      >
        Done
      </button>
      <button>Delete</button>
    </>
  );
};

export default Todo;
