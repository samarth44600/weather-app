export const Search = (state = { value: "" }, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
