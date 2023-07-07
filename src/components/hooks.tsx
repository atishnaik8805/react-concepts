import React, {
  RefObject,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from "react";
import useLocalStorageHook from "../custom-hooks/localstorage.hook";
import { slowComputation } from "../utils/functions";

const Hooks = () => {
  const [localValue, setLocalstorage] = useLocalStorageHook("key", "");
  const [dark, setDarkTheme]: [Boolean, Function] = useState(false);
  const [number, setNumber]: [Number | undefined, Function | null] = useState();
  const [refText, setRefText]: [string, Function | null] = useState("");
  const previousValue: any = useRef("");
  let inputRef: RefObject<any> = useRef();
  // useMemo can be used in 2 places
  // 1. In place of heavy computations, to cache
  // and reduce recalculations on no changes

  //let showNumber = slowComputation(number);

  let showNumber = useMemo(() => {
    return slowComputation(number);
  }, [number]);

  useEffect(() => {
    previousValue.current = refText;
  }, [refText]);

  // 2. Use memo can be used to prevent rerender,
  // since the below useEffect will run whenever the
  // reference to themes changes as theme is not a primitve
  //and obj, so use Memo hook, to recalculate theme
  //using useMemo
  // let themes = {
  //   backGroundTheme: dark ? "dark" : "light"
  // };

  let themes = useMemo(() => {
    return {
      backGroundTheme: dark ? "dark" : "light"
    };
  }, [dark]);
  useEffect(() => {
    console.log("Some computation, or side effect when theme changes");
  }, [themes]);

  return (
    <>
      <h3>Custom Hook</h3>
      <input
        type="text"
        value={localValue}
        onChange={(e) => {
          setLocalstorage(e.target.value);
        }}
      />
      <br />
      <h3>useMemo demo</h3>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <br />

      <h3>useRef Hook demo</h3>
      <input
        ref={inputRef}
        type="text"
        value={refText}
        onChange={(event) => setRefText(event.target.value)}
      />
      <h6>
        The current value is {refText} and the preveious value was
        {previousValue.current}
      </h6>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
};

export default Hooks;
