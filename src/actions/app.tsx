export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_LOADING = 'CLEAR_LOADING';

export const clearError = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const clearLoading = () => {
  return {
    type: CLEAR_LOADING,
  };
};
