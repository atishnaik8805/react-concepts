import React, { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { actions } from "../store/index";
//utils
import { COUNTERACTIONS } from "../utils/actions";

const ReduxPage = () => {
  const counter = useSelector((state) => state?.count.counter);
  const countDispatch = useDispatch();
  const [addValue, setAddValue] = useState(0);
  const increment = () => {
    //countDispatch({ type: COUNTERACTIONS.INCREMENT });
    countDispatch(actions.increment({}));
  };
  const decrement = () => {
    if (counter > 0)
      //countDispatch({ type: COUNTERACTIONS.DECREMENT });
      countDispatch(actions.decrement({}));
  };
  const addByNumber = () => {
    if (addValue >= 0)
      /*      countDispatch({
        type: COUNTERACTIONS.INCREMENTBY,
        payload: { addValue: parseFloat(addValue) }
      });*/
      countDispatch(actions.addByNumber({ addValue: parseFloat(addValue) }));
  };

  return (
    <>
      <h2>React Redux Store</h2>
      <h3>Counter App </h3>
      <h4>{counter}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input
        type="text"
        value={addValue}
        onChange={(e) => {
          setAddValue(e.target.value);
        }}
      />
      <button onClick={addByNumber}>Add by</button>
    </>
  );
};

export default ReduxPage;
