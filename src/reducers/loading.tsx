import { CLEAR_LOADING } from '../actions/app';

const Loading = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(PENDING|FULFILLED|REJECTED)/.exec(type);
  if (type === CLEAR_LOADING) {
    return state;
  }
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_PENDING
    //      and false when receiving GET_TODOS_FULFILLED / GET_TODOS_REJECTED
    [requestName]: requestState === 'PENDING',
  };
};

export default Loading;
