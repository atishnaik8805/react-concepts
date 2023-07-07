import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  let [data, setData]: [any, Function] = useState();

  // This useEffect will run only on mount (
  //i.e the first render/mounting of coponent)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {})
      .then((response) => {
        console.log(response);
        response.json();

        setData([{ id: 1 }, { id: 2 }]);
      })
      .then((json: any) => {
        console.log(json);
        setData(json);
      });

    // This will make sure that on UnMount,
    // Any return statement will get executed
    // So to handle removing event listenere
    // or any other subscription
    return setData([]);
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/redux">Redux</Link>
      <br />
      <Link to="/hooks">Hooks</Link>
      <br />
      <Link to="/context">Context</Link>
      <br />
      <Link to="/redux-reducer">Redux Reducer</Link>
      {data?.forEach((ele: []) => {
        return <li>1</li>;
      })}
    </>
  );
};

export default Home;
