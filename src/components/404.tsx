import React from "react";
import { useRouteError } from "react-router-dom";

const _404 = () => {
  let error: unknown = useRouteError();
  console.log(error);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{/* <i>{error?.statusText || error?.message}</i> */}</p>
      </div>
    </>
  );
};

export default _404;
