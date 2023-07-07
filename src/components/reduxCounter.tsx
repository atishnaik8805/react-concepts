import React, { useState, useReducer } from "react";

//Components
import Todo from "../components/Todo";

const COUNT_ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

export const TODOS_ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  TOGGLE: "toggle"
};

function countReducer(state, action) {
  switch (action.type) {
    case COUNT_ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case COUNT_ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error("No such Action");
  }
}

function newTodo(name: string) {
  return {
    name,
    id: Math.random(),
    done: false
  };
}

function todosReducer(todos, action) {
  switch (action.type) {
    case TODOS_ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)];
    case TODOS_ACTIONS.TOGGLE:
      return todos.map((todo: any) => {
        if (todo && todo?.id === action.payload.id) todo.done = !todo.done;
      });
  }
}

const reduxReducer = () => {
  const [state, countDispatch] = useReducer(countReducer, { count: 0 });
  const [todos, todoDispatch] = useReducer(todosReducer, []);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function increment() {
    //setCount((prevCount) => prevCount + 1);
    countDispatch({ type: "increment" });
  }

  function decrement() {
    if (state.count > 0)
      //setCount((prevCount) => prevCount - 1);
      countDispatch({ type: "decrement" });
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    todoDispatch({ type: "add", payload: { name } });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <h3>Redux Reducer Implemetation</h3>
      <h4>Counter Implemetation</h4>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <hr />
      <h4>ToDos Implemetation</h4>
      <h5>Todos Forms</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {todos?.map((ele: any) => {
          return <Todo key={ele?.id} todo={ele} dispatch={todoDispatch} />;
        })}
      </ul>
    </>
  );
};

export default reduxReducer;
