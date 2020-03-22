const Error = (state = {}, action) => {
  const { type, payload } = action;
  if (type === 'ERROR_CLEAR') {
    return {
      ...state,
      [payload.error]: ''
    };
  }
  const matches = /(.*)_(PENDING|REJECTED)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  const error =
    payload && payload.data && payload.data.error
      ? payload.data.error.message
      : payload
      ? payload.message
      : '';
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving GET_TODOS_REJECTED
    //      else clear errorMessage when receiving GET_TODOS_PENDING
    [requestName]: requestState === 'REJECTED' ? error : ''
  };
};

export default Error;
