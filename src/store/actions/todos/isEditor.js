export const isEditor = (state, action) => {
  return {
    ...state,
    inEditMod: !state.inEditMod,
    editData: action.editData,
  };
};
