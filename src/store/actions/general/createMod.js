export const createMod = (state) => {
  return {
    ...state,
    createMod: !state.createMod,
  };
};
