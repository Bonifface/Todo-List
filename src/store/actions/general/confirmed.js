export const confirmed = (state, action) => {
  return {
    ...state,
    confirmed: !state.confirmed,
    editData: action.editData,
  };
};
