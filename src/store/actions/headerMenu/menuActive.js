export const menuActive = (state) => {
  return {
    ...state,
    menuAct: !state.menuAct,
  };
};
