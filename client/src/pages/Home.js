import { React } from "react";
import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));

store.dispatch(incrementCount({ incrementBy: 50 }));

store.dispatch(decrementCount({ decrementBy: 12 }));

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is my site. Take a look</p>
    </div>
  );
}
