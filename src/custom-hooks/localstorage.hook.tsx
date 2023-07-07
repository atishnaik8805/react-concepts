import React, { useEffect, useState } from "react";

const getLocalValue = (key: string, intitalValue: Function | any) => {
  let localValue;
  try {
    localValue = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log("error");
  }

  if (localValue) return localValue;

  if (intitalValue instanceof Function) return intitalValue();
  else intitalValue;
};

const useLocalStorageHook = (key: string, initialValue: any) => {
  let [value, setLocalStorage] = useState(() => {
    return getLocalValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setLocalStorage];
};

export default useLocalStorageHook;
