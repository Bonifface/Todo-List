export const isLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload
  };
}