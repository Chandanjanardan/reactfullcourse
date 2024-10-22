// Counter.js
import React, { useReducer, useEffect } from "react";
import { postReducer}  from "./CounterReducer";

const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

function Counter() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  // Fetch data function
  async function fetchData() {
    try {
      dispatch({ type: "FETCH_START" });

      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAIL" });
      console.error("Fetch failed:", error);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {state.loading && <h1>Loading...</h1>}
      {state.error && <h1>Error fetching data!</h1>}
      {!state.loading && !state.error && (
        <ul>
          {state.post.length > 0 &&
            state.post.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Counter;
