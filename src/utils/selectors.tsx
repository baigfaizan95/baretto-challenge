export const createErrorMessageSelector = (actions: string[]) => (
  state: object
) => {
  const errors: object = {};
  actions.forEach((action: string) => {
    errors[action] = state[action];
  });
  return errors;
};

export const createLoadingSelector = (actions: string[]) => (state: object) =>
  actions.some((action: any) => state[action]);
