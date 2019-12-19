export const ToobarReducer = (state = false, action) => {
  switch (action.type) {
    case "ToobarHbClick":
      return !state;
    default:
      return state;
  }
};
