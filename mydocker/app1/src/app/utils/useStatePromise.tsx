import { useEffect, useState } from "react";

export function useStatePromise(promise) {
  const [error, setError] = useState(null);
  const [value, setValue] = useState(() => {
    // we don't want to return anything here!
    promise
      // if you want to use shorthand, you need to
      // initialize value and setValue empty with let
      // then assign [value, setValue] = useState
      // or use another state already defined
      .then((val) => setValue(val))
      .catch(setError);
  });
  const [newValue, setNewValue] = useState(null);

  useEffect(() => {
    if (newValue instanceof Promise) {
      newValue.then(setValue).catch(setError);
    } else {
      setValue(newValue);
    }
  }, [newValue, setValue]);

  return [value, setNewValue, error];
}
