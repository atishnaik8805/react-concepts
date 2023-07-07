import "./styles.css";

import Auth from "../src/components/Auth";
// Dependencies
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";
export default function App() {
  /* Implement Usestate, 
   Redux slices using redux toolkit,
   React-Router  (Look for various methods)
   react-forms
   client-state
   https://www.youtube.com/watch?v=6j9tnGMbm2c&t=41s
   (Above video about the react ecosystem 2023)
*/

  const loggedIn: boolean = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function logout() {
    dispatch(authActions.logout({}));
  }
  return (
    // Fragment, when needed to add multiple elements, without creating extra dom nodes.
    <>
      {!loggedIn && <Auth />}
      {loggedIn && (
        <>
          <h1>React Concepts, hello from home</h1>
          <button onClick={logout}>Logout</button>
          <br />
          <RouterProvider router={routes} />
        </>
      )}
    </>
  );
}
