export const login = (state, action) => {
  return {
    ...state,
    authorization: action.payload
  };
};
