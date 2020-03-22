import * as actions from '../actions/posts';
import { IPost, IPostComment } from '../interfaces/posts';

interface IState {
  posts: IPost[];
  comments: IPostComment[];
  post: IPost;
}

const initialPost = {
  userId: null,
  id: null,
  title: '',
  body: ''
};

const initialState: IState = {
  posts: [],
  comments: [],
  post: initialPost
};

const Posts = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case actions.FETCH_POSTS_FULFILLED:
      return { ...state, posts: action.payload };
    case actions.FETCH_POST_FULFILLED:
      return { ...state, post: action.payload };
    case actions.FETCH_POST_COMMENTS_FULFILLED:
      return { ...state, comments: action.payload };
    case actions.CLEAR_POST:
      return { ...state, comments: [], post: initialPost };
    default:
      return state;
  }
};

export default Posts;
