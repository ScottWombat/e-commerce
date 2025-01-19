/*https://codesandbox.io/embed/promise-state-7qd2n7?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark*/
import { useRef } from "react";

// This works in this example because of the interval keeps
// forcing rerenders and will pickup the new value as soon
// as the promise is done.
// Without it, you would see the new value only in the next render.
export function useRefPromise(promise) {
  const ref = useRef(promise.then((val) => (ref.current = val)));

  if (ref.current instanceof Promise) {
    return null;
  }

  return ref.current;
}
