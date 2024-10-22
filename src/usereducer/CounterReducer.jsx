// postReducer.js
export const postReducer = (state, action) => {
    console.log(state, "this is reducer state");
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          loading: true,
          error: false, // Reset error state on new fetch
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          post: action.payload,
          error: false,
        };
      case "FETCH_FAIL":
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
  